import { useRef, useState } from 'react';
import { ParsedCSV } from '../utils/types';
import { parseCSV } from '../utils/csv';

interface Props {
  onParsed(csv: ParsedCSV): void;
  parsedCSV: ParsedCSV | null;
  onClear(): void;
}

const PREVIEW_ROWS = 8;

export default function CSVUploader({ onParsed, parsedCSV, onClear }: Props) {
  const [isDragging, setIsDragging] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const processFile = (file: File) => {
    if (!file.name.endsWith('.csv') && file.type !== 'text/csv') {
      setError('Please upload a .csv file');
      return;
    }
    setError(null);
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const text = e.target?.result as string;
        const parsed = parseCSV(text, file.name);
        onParsed(parsed);
      } catch (err) {
        setError((err as Error).message);
      }
    };
    reader.readAsText(file);
  };

  const onDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    if (file) processFile(file);
  };

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) processFile(file);
    e.target.value = '';
  };

  if (parsedCSV) {
    const { headers, rows, totalRows, filename } = parsedCSV;
    const preview = rows.slice(0, PREVIEW_ROWS);

    return (
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <span className="font-semibold">{filename}</span>
            <span className="ml-2 text-sm opacity-60">
              {totalRows.toLocaleString()} rows &times; {headers.length} columns
            </span>
          </div>
          <button className="btn btn-sm btn-ghost" onClick={onClear}>
            Change file
          </button>
        </div>

        <div className="overflow-x-auto rounded-lg border border-base-300">
          <table className="table table-xs w-full">
            <thead>
              <tr>
                {headers.map((h, i) => (
                  <th key={i} className="bg-base-200 whitespace-nowrap">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {preview.map((row, ri) => (
                <tr key={ri}>
                  {row.map((cell, ci) => (
                    <td key={ci} className="max-w-[12rem] truncate">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {totalRows > PREVIEW_ROWS && (
          <p className="text-xs opacity-50">
            Showing {PREVIEW_ROWS} of {totalRows.toLocaleString()} rows
          </p>
        )}

        <div className="alert alert-success py-2">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <span>CSV loaded. Scroll down to analyze.</span>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div
        className={`border-2 border-dashed rounded-xl p-10 text-center cursor-pointer transition-colors ${
          isDragging ? 'border-primary bg-primary/10' : 'border-base-300 hover:border-primary/50'
        }`}
        onDragOver={(e) => {
          e.preventDefault();
          setIsDragging(true);
        }}
        onDragLeave={() => setIsDragging(false)}
        onDrop={onDrop}
        onClick={() => inputRef.current?.click()}
      >
        <div className="flex flex-col items-center gap-3 pointer-events-none">
          <svg
            className="w-12 h-12 opacity-40"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
          <div>
            <p className="font-semibold">Drop your CSV here</p>
            <p className="text-sm opacity-60 mt-1">or click to browse</p>
          </div>
        </div>
        <input
          ref={inputRef}
          type="file"
          accept=".csv,text/csv"
          className="hidden"
          onChange={onFileChange}
        />
      </div>

      {error && <div className="alert alert-error py-2 text-sm">{error}</div>}

      <p className="text-xs opacity-50">
        Your file is read entirely in your browser. It is never uploaded to any server.
      </p>
    </div>
  );
}
