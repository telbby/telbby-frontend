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
    return { id: nanoid(), ...command };
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

    const command = getLineOnSequence(0);

    if (command.type === 'readLine') addNewLines(command);
    else addNewLines(command, getLineOnSequence(command.nextSequence));
  }, []);

  return [lines, executeCurrentLine];
};

export default useShellLine;
