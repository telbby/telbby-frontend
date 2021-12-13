export type Line = {
  type: 'printLine' | 'readLine';
  prefix: string;
  message: string;
};
