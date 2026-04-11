import { useRef, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkBreaks from 'remark-breaks';
import { ParsedCSV } from '../utils/types';
import { formatCSVForLLM } from '../utils/csv';
import { ANALYSIS_PROMPTS } from '../config';
import { useWllama } from '../utils/wllama.context';

interface Props {
  parsedCSV: ParsedCSV;
}

const SYSTEM_PROMPT =
  'You are a data analyst assistant. You will be given a dataset in CSV format along with column statistics. Analyze the data as requested. Be concise, precise, and highlight the most important findings. Use markdown for formatting when helpful.';

export default function AnalysisPanel({ parsedCSV }: Props) {
  const { createCompletion, stopCompletion, isGenerating } = useWllama();
  const [customPrompt, setCustomPrompt] = useState('');
  const [output, setOutput] = useState('');
  const [activePromptLabel, setActivePromptLabel] = useState('');
  const outputRef = useRef<HTMLDivElement>(null);

  const runAnalysis = async (userPrompt: string, label: string) => {
    if (!userPrompt.trim() || isGenerating) return;
    setOutput('');
    setActivePromptLabel(label);

    const csvContext = formatCSVForLLM(parsedCSV);

    await createCompletion(
      [
        { role: 'system', content: SYSTEM_PROMPT },
        {
          role: 'user',
          content: `Here is the dataset:\n\n${csvContext}\n\n${userPrompt}`,
        },
      ],
      (currentText) => {
        setOutput(currentText);
        setTimeout(() => {
          outputRef.current?.scrollTo({ top: outputRef.current.scrollHeight, behavior: 'smooth' });
        }, 0);
      }
    );
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
      <div className="lg:col-span-2 space-y-4">
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide opacity-60 mb-2">
            Quick analysis
          </h3>
          <div className="flex flex-col gap-2">
            {ANALYSIS_PROMPTS.map((p) => (
              <button
                key={p.label}
                className={`btn btn-sm justify-start text-left ${
                  activePromptLabel === p.label && !isGenerating
                    ? 'btn-primary'
                    : 'btn-ghost border border-base-300'
                }`}
                onClick={() => runAnalysis(p.prompt, p.label)}
                disabled={isGenerating}
              >
                {p.label}
              </button>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide opacity-60 mb-2">
            Custom prompt
          </h3>
          <textarea
            className="textarea textarea-bordered w-full text-sm"
            rows={4}
            placeholder="Ask anything about your data..."
            value={customPrompt}
            onChange={(e) => setCustomPrompt(e.target.value)}
            disabled={isGenerating}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && (e.metaKey || e.ctrlKey)) {
                runAnalysis(customPrompt, 'Custom');
              }
            }}
          />
          <button
            className="btn btn-primary btn-sm mt-2 w-full"
            onClick={() => runAnalysis(customPrompt, 'Custom')}
            disabled={isGenerating || !customPrompt.trim()}
          >
            {isGenerating ? (
              <>
                <span className="loading loading-spinner loading-xs" />
                Analyzing…
              </>
            ) : (
              'Analyze'
            )}
          </button>
          {isGenerating && (
            <button
              className="btn btn-ghost btn-sm mt-1 w-full"
              onClick={stopCompletion}
            >
              Stop
            </button>
          )}
        </div>
      </div>

      <div className="lg:col-span-3">
        {output ? (
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-semibold uppercase tracking-wide opacity-60">
                {activePromptLabel || 'Analysis'}
              </h3>
              {!isGenerating && (
                <button
                  className="btn btn-xs btn-ghost opacity-50"
                  onClick={() => {
                    setOutput('');
                    setActivePromptLabel('');
                  }}
                >
                  Clear
                </button>
              )}
            </div>
            <div
              ref={outputRef}
              className="bg-base-200 rounded-xl p-5 max-h-[60vh] overflow-y-auto text-sm leading-relaxed"
            >
              <ReactMarkdown
                remarkPlugins={[remarkGfm, remarkBreaks]}
                components={{
                  table: ({ ...props }) => (
                    <div className="overflow-x-auto my-3">
                      <table className="table table-xs" {...props} />
                    </div>
                  ),
                  th: ({ ...props }) => <th className="bg-base-300" {...props} />,
                  code: ({ ...props }) => (
                    <code className="bg-base-300 px-1 rounded text-xs" {...props} />
                  ),
                }}
              >
                {output}
              </ReactMarkdown>
              {isGenerating && <span className="inline-block w-2 h-4 bg-current animate-pulse ml-0.5" />}
            </div>
          </div>
        ) : (
          <div className="h-full min-h-[200px] flex items-center justify-center rounded-xl border-2 border-dashed border-base-300">
            <p className="text-sm opacity-40">
              {isGenerating ? 'Generating…' : 'Select a prompt or type your own to get started'}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
