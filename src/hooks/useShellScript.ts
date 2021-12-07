import {
  PrintLineCommand,
  ReadLineCommand,
  ScriptCommand,
} from '@/types/shell';

/**
 * TODO: 아직 완성되지 않은 훅입니다.
 * 좀 더 나은 방법이 없을 지 고민하고 있습니다.
 */
const useShellScript = () => {
  const script: ScriptCommand[] = [];

  const createPrintLineCommand = (
    nextSequence: number | null,
    prefix: 'error' | '',
    message: string,
  ): PrintLineCommand => ({
    type: 'printLine',
    prefix,
    message,
    nextSequence,
  });

  const createReadLineCommand = (
    prefix: ReadLineCommand['prefix'],
    message: ReadLineCommand['message'],
    enterHandler: ReadLineCommand['enterHandler'],
    defaultValue?: ReadLineCommand['defaultValue'],
    formKey?: ReadLineCommand['formKey'],
    maxLength?: ReadLineCommand['maxLength'],
  ): ReadLineCommand => {
    const readLine: ReadLineCommand = {
      type: 'readLine',
      prefix,
      message,
      enterHandler,
    };

    if (defaultValue) readLine.defaultValue = defaultValue;
    if (formKey) readLine.formKey = formKey;
    if (maxLength) readLine.maxLength = maxLength;

    return readLine;
  };

  const addPrintLineCommand = (
    sequence: number,
    nextSequence: number,
    prefix: 'error' | '',
    message: string,
  ) => {
    const newPrintLine = createPrintLineCommand(nextSequence, prefix, message);

    script.push({ sequence, ...newPrintLine });
  };

  const addReadLineCommand = (
    sequence: number,
    prefix: 'question' | 'config',
    message: string,
    enterHandler: ReadLineCommand['enterHandler'],
    defaultValue?: string,
    formKey?: string,
    maxLength?: number,
  ) => {
    const newReadLine = createReadLineCommand(
      prefix,
      message,
      enterHandler,
      defaultValue,
      formKey,
      maxLength,
    );

    script.push({ sequence, ...newReadLine });
  };

  return [
    script,
    addPrintLineCommand,
    addReadLineCommand,
    createPrintLineCommand,
    createReadLineCommand,
  ] as const;
};

export default useShellScript;
