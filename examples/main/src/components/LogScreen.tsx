import React, { useEffect, useState } from 'react';
import { DebugLogger } from '../utils/utils';
import ScreenWrapper from './ScreenWrapper';
import { nl2br } from '../utils/nl2br';

export default function LogScreen() {
  const [, setVersion] = useState(0);
  const [copyLabel, setCopyLabel] = useState('Copy Logs');

  useEffect(() => {
    return DebugLogger.subscribe(() => {
      setVersion((v) => v + 1);
    });
  }, []);

  const copyLogs = async () => {
    const text = DebugLogger.getText();
    try {
      await navigator.clipboard.writeText(text);
      setCopyLabel('Copied');
      setTimeout(() => setCopyLabel('Copy Logs'), 1500);
    } catch (_) {
      setCopyLabel('Copy Failed');
      setTimeout(() => setCopyLabel('Copy Logs'), 1500);
    }
  };

  return (
    <ScreenWrapper>
      <div className="debug-log-screen pt-8">
        <div className="mb-4 flex items-center justify-between gap-4">
          <h1 className="text-2xl">Debug log</h1>
          <button className="btn btn-sm" onClick={copyLogs}>
            {copyLabel}
          </button>
        </div>

        <div className="font-mono bg-base-200 p-2 rounded-lg text-sm mb-16 whitespace-pre-wrap select-text overflow-x-auto">
          {DebugLogger.content.length === 0 && (
            <span>(Log is empty. Please firstly load a model)</span>
          )}
          {DebugLogger.content.map((line, i) => (
            <React.Fragment key={i}>
              {nl2br(line)}
              <br />
            </React.Fragment>
          ))}
        </div>
      </div>
    </ScreenWrapper>
  );
}
