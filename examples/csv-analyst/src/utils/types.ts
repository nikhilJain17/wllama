export enum ModelState {
  NOT_DOWNLOADED,
  DOWNLOADING,
  READY,
  LOADING,
  LOADED,
}

export interface ParsedCSV {
  headers: string[];
  rows: string[][];
  totalRows: number;
  filename: string;
}
