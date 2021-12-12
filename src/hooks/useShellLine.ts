import { nanoid } from 'nanoid';
import { useEffect, useState } from 'react';

import {
  PrintLineCommand,
  ReadLineCommand,
  ScriptCommand,
  ShellLine,
} from '@/types/shell';

const useShellLine = (
  script: readonly ScriptCommand[],
): [ShellLine[], (value: string) => Promise<void>] => {
  const [lines, setLines] = useState<ShellLine[]>([]);

  const [formValue, setFormValue] = useState({});

  const injectUniqueID = (command: PrintLineCommand | ReadLineCommand) => {
    return {  ...command, id: nanoid() };
  };

  const findCommandOnSequence = (seq: number) => {
    return script.find(({ sequence }) => sequence === seq);
  };

  const getLineOnSequence = (seq: number) => {
    return injectUniqueID(findCommandOnSequence(seq));
  };

  const addNewLines = (...newLines: ShellLine[]) => {
    return setLines((prev) => [...prev, ...newLines]);
  };

  const executeCurrentLine = async (value: string) => {
    const currentLine = lines[lines.length - 1];

    if (currentLine.type === 'printLine') return;

    const { defaultValue, enterHandler, formKey } = currentLine;

    const commandValue = value || defaultValue;

    const result = await enterHandler(commandValue, formValue);

    if (result.status === 'error') {
      addNewLines(
        injectUniqueID(result),
        getLineOnSequence(result.nextSequence),
      );
    } else {
      addNewLines(getLineOnSequence(result.nextSequence));

      if (formKey) {
        setFormValue((prev) => ({
          ...prev,
          [formKey]: commandValue,
        }));
      }
    }
  };

  useEffect(() => {
    if (lines.length !== 0) return;

    const firstLine = getLineOnSequence(0);

    if (firstLine.type === 'readLine') addNewLines(firstLine);
    else addNewLines(firstLine, getLineOnSequence(firstLine.nextSequence));
  }, []);

  return [lines, executeCurrentLine];
};

export default useShellLine;
