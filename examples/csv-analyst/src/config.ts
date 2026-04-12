import wllamaJspiSingle from '@wllama/wllama/src/jspi-single-thread/wllama.wasm?url';
import wllamaJspiMulti from '@wllama/wllama/src/jspi-multi-thread/wllama.wasm?url';
import wllamaAsyncifySingle from '@wllama/wllama/src/asyncify-single-thread/wllama.wasm?url';
import wllamaAsyncifyMulti from '@wllama/wllama/src/asyncify-multi-thread/wllama.wasm?url';

export const WLLAMA_CONFIG_PATHS = {
  'jspi/single-thread/wllama.wasm': wllamaJspiSingle,
  'jspi/multi-thread/wllama.wasm': wllamaJspiMulti,
  'asyncify/single-thread/wllama.wasm': wllamaAsyncifySingle,
  'asyncify/multi-thread/wllama.wasm': wllamaAsyncifyMulti,
};

export interface ModelConfig {
  url: string;
  name: string;
  description: string;
  size: number;
  tier: 'fast' | 'balanced' | 'quality';
}

export const MODELS: ModelConfig[] = [
  {
    url: 'https://huggingface.co/QuantFactory/SmolLM2-360M-Instruct-GGUF/resolve/main/SmolLM2-360M-Instruct.Q4_0.gguf',
    name: 'SmolLM2 360M',
    description: 'Fastest. Handles simple summaries well.',
    size: 240123904,
    tier: 'fast',
  },
  {
    url: 'https://huggingface.co/unsloth/gemma-3-270m-it-GGUF/resolve/main/gemma-3-270m-it-Q4_0.gguf',
    name: 'Gemma 3 270M',
    description: "Google's lightweight instruction model.",
    size: 241574944,
    tier: 'fast',
  },
  {
    url: 'https://huggingface.co/unsloth/Qwen3-0.6B-GGUF/resolve/main/Qwen3-0.6B-Q8_0.gguf',
    name: 'Qwen3 0.6B',
    description: 'Good balance of speed and reasoning.',
    size: 639447744,
    tier: 'balanced',
  },
  {
    url: 'https://huggingface.co/LiquidAI/LFM2.5-1.2B-Instruct-GGUF/resolve/main/LFM2.5-1.2B-Instruct-Q4_0.gguf',
    name: 'LFM2.5 1.2B',
    description: "LiquidAI's efficient 1.2B model.",
    size: 695751488,
    tier: 'balanced',
  },
  {
    url: 'https://huggingface.co/unsloth/Llama-3.2-1B-Instruct-GGUF/resolve/main/Llama-3.2-1B-Instruct-Q4_0.gguf',
    name: 'Llama 3.2 1B',
    description: "Meta's compact instruction model.",
    size: 773025824,
    tier: 'balanced',
  },
  {
    url: 'https://huggingface.co/unsloth/gemma-3-1b-it-GGUF/resolve/main/gemma-3-1b-it-Q4_0.gguf',
    name: 'Gemma 3 1B',
    description: 'Strong 1B model from Google.',
    size: 721918496,
    tier: 'balanced',
  },
  {
    url: 'https://huggingface.co/unsloth/Qwen3.5-2B-GGUF/resolve/main/Qwen3.5-2B-Q4_0.gguf',
    name: 'Qwen3.5 2B',
    description: 'Great quality for deeper analysis.',
    size: 1214873856,
    tier: 'quality',
  },
  {
    url: 'https://huggingface.co/unsloth/Llama-3.2-3B-Instruct-GGUF/resolve/main/Llama-3.2-3B-Instruct-Q4_0.gguf',
    name: 'Llama 3.2 3B',
    description: 'Best quality. Needs ~2 GB RAM.',
    size: 1921909184,
    tier: 'quality',
  },
];

export const TIER_LABELS: Record<ModelConfig['tier'], string> = {
  fast: 'Fast (~240 MB)',
  balanced: 'Balanced (600 MB – 800 MB)',
  quality: 'Quality (1.2 GB – 2 GB)',
};

export const ANALYSIS_PROMPTS = [
  {
    label: 'Summarize dataset',
    prompt:
      'Provide a concise summary of this dataset. What does it contain and what is it tracking?',
  },
  {
    label: 'Key statistics',
    prompt:
      'What are the key statistics from this dataset? For each important column, cite specific numbers: exact min, max, mean, and any notable percentiles or counts. Do not make general statements without a number to back them up.',
  },
  {
    label: 'Trends & patterns',
    prompt:
      'What trends and patterns do you observe? Support every claim with specific values from the data — e.g. "X increased from A to B" or "column X correlates with column Y, e.g. when X is N, Y tends to be M". Do not describe a trend without citing the numbers that show it.',
  },
  {
    label: 'Anomalies & outliers',
    prompt:
      'Are there any anomalies, outliers, or unusual values? For each one, name the column, give the specific value, and explain why it stands out (e.g. "value 999 is 4x the mean of 245"). Do not flag something as an outlier without showing the number.',
  },
  {
    label: 'Insights & recommendations',
    prompt:
      'What actionable insights or recommendations can you draw from this data?',
  },
];
