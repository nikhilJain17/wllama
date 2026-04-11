import { createContext, useContext, useEffect, useState } from 'react';
import { Model, ModelManager, Wllama, WllamaChatMessage } from '@wllama/wllama';
import { MODELS, ModelConfig, WLLAMA_CONFIG_PATHS } from '../config';
import { ModelState } from './types';

const LOG = (...args: unknown[]) => console.log('[csv-analyst]', ...args);
const ERR = (...args: unknown[]) => console.error('[csv-analyst]', ...args);

export interface ModelInfo extends ModelConfig {
  state: ModelState;
  downloadPercent: number;
  cachedModel?: Model;
}

export interface RuntimeInfo {
  usingWebGPU: boolean;
  isMultithread: boolean;
}

interface WllamaContextValue {
  models: ModelInfo[];
  downloadModel(url: string): Promise<void>;
  loadModel(url: string): Promise<void>;
  unloadModel(): Promise<void>;
  isDownloading: boolean;
  isLoadingModel: boolean;
  loadedModelUrl: string | null;
  runtimeInfo: RuntimeInfo | null;
  createCompletion(
    messages: WllamaChatMessage[],
    onToken: (currentText: string) => void
  ): Promise<void>;
  stopCompletion(): void;
  isGenerating: boolean;
}

const WllamaContext = createContext<WllamaContextValue>({} as WllamaContextValue);

const modelManager = new ModelManager();
let wllama = new Wllama(WLLAMA_CONFIG_PATHS, { preferWebGPU: true });
let stopSignal = false;

LOG('wllama instance created');

const resetWllama = () => {
  LOG('resetting wllama instance');
  wllama = new Wllama(WLLAMA_CONFIG_PATHS, { preferWebGPU: true });
};

export function WllamaProvider({ children }: { children: React.ReactNode }) {
  const [cachedModels, setCachedModels] = useState<Model[]>([]);
  const [loadedModelUrl, setLoadedModelUrl] = useState<string | null>(null);
  const [isLoadingModel, setIsLoadingModel] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [runtimeInfo, setRuntimeInfo] = useState<RuntimeInfo | null>(null);
  const [downloadProgress, setDownloadProgress] = useState<Record<string, number>>({});

  const refreshCache = async () => {
    const models = await modelManager.getModels();
    LOG('cache refreshed, models in cache:', models.map((m) => m.url));
    setCachedModels(models);
  };

  useEffect(() => {
    refreshCache();
  }, []);

  const isDownloading = Object.keys(downloadProgress).length > 0;

  const models: ModelInfo[] = MODELS.map((cfg) => {
    const cached = cachedModels.find((m) => m.url === cfg.url);
    const dlPercent = downloadProgress[cfg.url] ?? -1;

    let state: ModelState;
    if (cfg.url === loadedModelUrl) {
      state = isLoadingModel ? ModelState.LOADING : ModelState.LOADED;
    } else if (dlPercent >= 0) {
      state = ModelState.DOWNLOADING;
    } else if (cached) {
      state = ModelState.READY;
    } else {
      state = ModelState.NOT_DOWNLOADED;
    }

    return { ...cfg, state, downloadPercent: dlPercent, cachedModel: cached };
  });

  const downloadModel = async (url: string) => {
    LOG('downloadModel called, url:', url);
    LOG('guards — isDownloading:', isDownloading, 'loadedModelUrl:', loadedModelUrl, 'isLoadingModel:', isLoadingModel);
    if (isDownloading || loadedModelUrl || isLoadingModel) {
      LOG('downloadModel blocked by guard, returning early');
      return;
    }
    setDownloadProgress((p) => ({ ...p, [url]: 0 }));
    try {
      await modelManager.downloadModel(url, {
        progressCallback({ loaded, total }) {
          const pct = Math.round((loaded / total) * 100);
          if (pct % 10 === 0) LOG(`download progress: ${pct}%`);
          setDownloadProgress((p) => ({ ...p, [url]: loaded / total }));
        },
      });
      LOG('download complete:', url);
      setDownloadProgress((p) => {
        const next = { ...p };
        delete next[url];
        return next;
      });
      await refreshCache();
    } catch (e) {
      ERR('download failed:', e);
      setDownloadProgress((p) => {
        const next = { ...p };
        delete next[url];
        return next;
      });
      alert(`Download failed: ${(e as Error).message ?? 'Unknown error'}`);
    }
  };

  const loadModel = async (url: string) => {
    LOG('loadModel called, url:', url);
    LOG('guards — isDownloading:', isDownloading, 'loadedModelUrl:', loadedModelUrl, 'isLoadingModel:', isLoadingModel);
    if (isDownloading || loadedModelUrl || isLoadingModel) {
      LOG('loadModel blocked by guard, returning early');
      return;
    }

    setLoadedModelUrl(url);
    setIsLoadingModel(true);

    try {
      // Fetch fresh from modelManager (not stale React state) — same pattern as canvas-agent
      LOG('fetching fresh model list from modelManager...');
      const freshModels = await modelManager.getModels();
      LOG('fresh models:', freshModels.map((m) => m.url));
      const cached = freshModels.find((m) => m.url === url);
      if (!cached) {
        throw new Error(`Model not found in cache. Available: ${freshModels.map((m) => m.url).join(', ') || '(none)'}`);
      }
      LOG('found cached model, size:', cached.size, 'files:', cached.files.length);

      LOG('calling wllama.loadModel...');
      await wllama.loadModel(cached, { n_ctx: 4096 });

      const info: RuntimeInfo = {
        usingWebGPU: wllama.usingWebGPU(),
        isMultithread: wllama.isMultithread(),
      };
      LOG('model loaded! usingWebGPU:', info.usingWebGPU, 'isMultithread:', info.isMultithread);
      setRuntimeInfo(info);
    } catch (e) {
      ERR('loadModel failed:', e);
      try { await wllama.exit(); } catch (exitErr) { ERR('exit() also failed:', exitErr); }
      resetWllama();
      setLoadedModelUrl(null);
      setRuntimeInfo(null);
      alert(`Failed to load model: ${(e as Error).message ?? 'Unknown error'}`);
    } finally {
      setIsLoadingModel(false);
    }
  };

  const unloadModel = async () => {
    LOG('unloadModel called');
    if (!loadedModelUrl) return;
    await wllama.exit();
    resetWllama();
    setLoadedModelUrl(null);
    setRuntimeInfo(null);
  };

  const createCompletion = async (
    messages: WllamaChatMessage[],
    onToken: (currentText: string) => void
  ) => {
    LOG('createCompletion called, messages:', messages.length);
    if (!loadedModelUrl || isLoadingModel) {
      ERR('createCompletion called but model not ready — loadedModelUrl:', loadedModelUrl, 'isLoadingModel:', isLoadingModel);
      return;
    }
    setIsGenerating(true);
    stopSignal = false;
    try {
      const result = await wllama.createChatCompletion(messages, {
        nPredict: 800,
        sampling: { temp: 0.3 },
        onNewToken(_token, _piece, currentText, optionals) {
          onToken(currentText);
          if (stopSignal) optionals.abortSignal();
        },
      });
      LOG('completion finished, length:', result.length);
      onToken(result);
    } catch (e) {
      const msg = (e as Error).message ?? '';
      if (!msg.includes('aborted')) {
        ERR('completion error:', e);
        alert(`Generation error: ${msg}`);
      }
    }
    stopSignal = false;
    setIsGenerating(false);
  };

  const stopCompletion = () => {
    LOG('stopCompletion called');
    stopSignal = true;
  };

  return (
    <WllamaContext.Provider
      value={{
        models,
        downloadModel,
        loadModel,
        unloadModel,
        isDownloading,
        isLoadingModel,
        loadedModelUrl,
        runtimeInfo,
        createCompletion,
        stopCompletion,
        isGenerating,
      }}
    >
      {children}
    </WllamaContext.Provider>
  );
}

export const useWllama = () => useContext(WllamaContext);
