import { ModelInfo, useWllama } from '../utils/wllama.context';
import { ModelState } from '../utils/types';
import { MODELS, TIER_LABELS } from '../config';

function toHumanSize(bytes: number): string {
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(0)} KB`;
  if (bytes < 1024 * 1024 * 1024) return `${(bytes / 1024 / 1024).toFixed(0)} MB`;
  return `${(bytes / 1024 / 1024 / 1024).toFixed(1)} GB`;
}

const TIER_BADGE: Record<string, string> = {
  fast: 'badge-success',
  balanced: 'badge-warning',
  quality: 'badge-error',
};

function ModelCard({ model }: { model: ModelInfo }) {
  const { downloadModel, loadModel, unloadModel, removeModel, isDownloading, isLoadingModel } = useWllama();
  const busy = isDownloading || isLoadingModel;
  const percent = Math.round((model.downloadPercent ?? 0) * 100);

  return (
    <div
      className={`card bg-base-200 border-2 transition-colors ${
        model.state === ModelState.LOADED ? 'border-primary' : 'border-transparent'
      }`}
    >
      <div className="card-body p-4">
        <div className="flex items-start justify-between gap-2">
          <div className="min-w-0">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="font-semibold">{model.name}</span>
              <span className={`badge badge-sm ${TIER_BADGE[model.tier]}`}>{model.tier}</span>
              {model.state === ModelState.LOADED && (
                <span className="badge badge-sm badge-primary">loaded</span>
              )}
            </div>
            <p className="text-sm opacity-70 mt-0.5">{model.description}</p>
            <p className="text-xs opacity-50 mt-0.5">{toHumanSize(model.size)}</p>
          </div>

          <div className="flex-shrink-0 flex items-center gap-1">
            {model.state === ModelState.NOT_DOWNLOADED && (
              <button
                className="btn btn-sm btn-primary btn-outline"
                onClick={() => downloadModel(model.url)}
                disabled={busy}
              >
                Download
              </button>
            )}
            {model.state === ModelState.READY && (
              <>
                <button
                  className="btn btn-sm btn-primary"
                  onClick={() => loadModel(model.url)}
                  disabled={busy}
                >
                  Load
                </button>
                <button
                  className="btn btn-sm btn-ghost text-error"
                  title="Delete from cache"
                  onClick={() => {
                    if (confirm(`Delete ${model.name} from cache?`)) removeModel(model.url);
                  }}
                  disabled={busy}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </button>
              </>
            )}
            {model.state === ModelState.LOADED && (
              <button className="btn btn-sm btn-ghost" onClick={() => unloadModel()}>
                Unload
              </button>
            )}
            {(model.state === ModelState.DOWNLOADING || model.state === ModelState.LOADING) && (
              <span className="loading loading-spinner loading-sm text-primary" />
            )}
          </div>
        </div>

        {model.state === ModelState.DOWNLOADING && (
          <progress className="progress progress-primary w-full mt-2" value={percent} max={100} />
        )}
        {model.state === ModelState.LOADING && (
          <progress className="progress progress-primary w-full mt-2" />
        )}
      </div>
    </div>
  );
}

export default function ModelSelector() {
  const { models, loadedModelUrl, runtimeInfo } = useWllama();
  const tiers = (['fast', 'balanced', 'quality'] as const).filter((t) =>
    MODELS.some((m) => m.tier === t)
  );

  return (
    <div className="space-y-6">
      {loadedModelUrl && (
        <div className="alert alert-success py-2">
          <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
            <span>Model loaded. Scroll down to upload your CSV.</span>
            {runtimeInfo && (
              <span
                className={`badge badge-sm ${
                  runtimeInfo.usingWebGPU
                    ? 'badge-warning'
                    : runtimeInfo.isMultithread
                      ? 'badge-accent'
                      : 'badge-neutral'
                }`}
              >
                {runtimeInfo.usingWebGPU
                  ? '⚡ WebGPU'
                  : runtimeInfo.isMultithread
                    ? '🧵 Multi-thread'
                    : '🐢 Single-thread WASM'}
              </span>
            )}
          </div>
        </div>
      )}

      {tiers.map((tier) => (
        <div key={tier}>
          <h3 className="text-sm font-semibold uppercase tracking-wide opacity-60 mb-2">
            {TIER_LABELS[tier]}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {models
              .filter((m) => m.tier === tier)
              .map((m) => (
                <ModelCard key={m.url} model={m} />
              ))}
          </div>
        </div>
      ))}

      <p className="text-xs opacity-50 pt-2">
        Models are downloaded once and cached in your browser. Larger models produce better analysis
        but require more RAM and download time.
      </p>
    </div>
  );
}
