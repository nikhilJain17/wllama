import { ParsedCSV } from './types';

function parseRow(line: string): string[] {
  const result: string[] = [];
  let current = '';
  let inQuotes = false;
  for (let i = 0; i < line.length; i++) {
    const c = line[i];
    if (c === '"') {
      if (inQuotes && line[i + 1] === '"') {
        current += '"';
        i++;
      } else {
        inQuotes = !inQuotes;
      }
    } else if (c === ',' && !inQuotes) {
      result.push(current.trim());
      current = '';
    } else {
      current += c;
    }
  }
  result.push(current.trim());
  return result;
}

export function parseCSV(text: string, filename: string): ParsedCSV {
  const lines = text.split(/\r?\n/).filter((l) => l.trim().length > 0);
  if (lines.length < 2) throw new Error('CSV must have a header row and at least one data row');
  const headers = parseRow(lines[0]);
  const rows = lines.slice(1).map(parseRow);
  return { headers, rows, totalRows: rows.length, filename };
}

function getColumnStats(headers: string[], rows: string[][]): string {
  const lines: string[] = [];
  for (let i = 0; i < headers.length; i++) {
    const values = rows.map((r) => r[i]).filter((v) => v !== undefined && v !== '');
    const numValues = values.map((v) => parseFloat(v)).filter((v) => !isNaN(v));
    if (numValues.length > values.length * 0.6 && numValues.length > 0) {
      const min = Math.min(...numValues);
      const max = Math.max(...numValues);
      const mean = numValues.reduce((a, b) => a + b, 0) / numValues.length;
      lines.push(
        `- ${headers[i]}: numeric, min=${min.toFixed(2)}, max=${max.toFixed(2)}, mean=${mean.toFixed(2)}, n=${numValues.length}`
      );
    } else {
      const freq = new Map<string, number>();
      for (const v of values) freq.set(v, (freq.get(v) ?? 0) + 1);
      const top = [...freq.entries()]
        .sort((a, b) => b[1] - a[1])
        .slice(0, 5)
        .map(([v, c]) => `"${v}"(${c})`)
        .join(', ');
      lines.push(`- ${headers[i]}: categorical, unique=${freq.size}, top: ${top}`);
    }
  }
  return lines.join('\n');
}

const MAX_CHARS = 8000;

export function formatCSVForLLM(parsed: ParsedCSV): string {
  const { headers, rows, totalRows, filename } = parsed;

  const statsBlock = `Dataset: ${filename}
Columns (${headers.length}): ${headers.join(', ')}
Total rows: ${totalRows}

Column statistics:
${getColumnStats(headers, rows)}`;

  const headerLine = headers.join(',');
  let dataLines = '';
  let rowCount = 0;
  for (const row of rows) {
    const line = row.join(',') + '\n';
    if ((dataLines + line).length > MAX_CHARS) break;
    dataLines += line;
    rowCount++;
  }

  const truncNote =
    rowCount < totalRows ? `\n(showing ${rowCount} of ${totalRows} rows due to context limit)` : '';

  return `${statsBlock}

Sample data${truncNote}:
${headerLine}
${dataLines.trim()}`;
}
