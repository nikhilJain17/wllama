import { useState } from 'react';
import { WllamaProvider, useWllama } from './utils/wllama.context';
import { ParsedCSV } from './utils/types';
import ModelSelector from './components/ModelSelector';
import CSVUploader from './components/CSVUploader';
import AnalysisPanel from './components/AnalysisPanel';

function PrivacyBadge() {
  return (
    <div className="flex items-center gap-2 bg-success/10 border border-success/30 rounded-full px-4 py-1.5 text-sm text-success font-medium">
      <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
        <path
          fillRule="evenodd"
          d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
          clipRule="evenodd"
        />
      </svg>
      Your data never leaves this device
    </div>
  );
}

interface SectionProps {
  step: number;
  title: string;
  subtitle: string;
  locked?: boolean;
  children: React.ReactNode;
}

function Section({ step, title, subtitle, locked, children }: SectionProps) {
  return (
    <section
      className={`card bg-base-100 shadow-sm border border-base-200 transition-opacity ${
        locked ? 'opacity-40 pointer-events-none select-none' : ''
      }`}
    >
      <div className="card-body p-6">
        <div className="flex items-center gap-3 mb-4">
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 ${
              locked ? 'bg-base-300 text-base-content/50' : 'bg-primary text-primary-content'
            }`}
          >
            {step}
          </div>
          <div>
            <h2 className="text-lg font-semibold leading-tight">{title}</h2>
            <p className="text-sm opacity-60">{subtitle}</p>
          </div>
        </div>
        {children}
      </div>
    </section>
  );
}

function MainContent() {
  const { loadedModelUrl } = useWllama();
  const [parsedCSV, setParsedCSV] = useState<ParsedCSV | null>(null);

  const modelLoaded = !!loadedModelUrl;
  const csvReady = !!parsedCSV;

  return (
    <div className="min-h-screen bg-base-200">
      <header className="bg-base-100 border-b border-base-200 sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between gap-4 flex-wrap">
          <div>
            <h1 className="text-xl font-bold leading-tight">Private CSV Analyst</h1>
            <p className="text-xs opacity-50">Powered by wllama — runs entirely in your browser</p>
          </div>
          <PrivacyBadge />
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8 space-y-6">
        <div className="alert bg-base-100 border border-base-200 py-3 text-sm">
          <svg className="w-5 h-5 text-info flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
              clipRule="evenodd"
            />
          </svg>
          <span>
            Upload sensitive business data, medical records, or any private CSV with confidence —
            the AI model downloads once and runs <strong>100% locally</strong>. Zero data is sent to
            any server.
          </span>
        </div>

        <Section
          step={1}
          title="Choose a model"
          subtitle="Download once, runs offline. Larger models give better analysis."
        >
          <ModelSelector />
        </Section>

        <Section
          step={2}
          title="Upload your CSV"
          subtitle="Drag & drop or browse. File stays in your browser."
          locked={!modelLoaded}
        >
          <CSVUploader
            parsedCSV={parsedCSV}
            onParsed={setParsedCSV}
            onClear={() => setParsedCSV(null)}
          />
        </Section>

        <Section
          step={3}
          title="Analyze"
          subtitle="Pick a preset analysis or write your own question."
          locked={!modelLoaded || !csvReady}
        >
          {csvReady ? (
            <AnalysisPanel parsedCSV={parsedCSV} />
          ) : (
            <p className="text-sm opacity-50">Upload a CSV file above to get started.</p>
          )}
        </Section>
      </main>

      <footer className="text-center text-xs opacity-40 py-6">
        Built with{' '}
        <a
          href="https://github.com/ngxson/wllama"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          wllama
        </a>{' '}
        &mdash; WebAssembly LLM inference in the browser
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <WllamaProvider>
      <MainContent />
    </WllamaProvider>
  );
}
