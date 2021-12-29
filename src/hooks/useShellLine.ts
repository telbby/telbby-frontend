import { nanoid } from 'nanoid';
import { ReactElement, useEffect, useState } from 'react';

import { ShellCommandType } from '@/components/shell/types';

type LineType = Omit<ShellCommandType, 'sequence'> & {
  id: string;
};

const useShellLine = (
  commands: ReactElement[],
): [LineType[], (input: string) => Promise<void>] => {
  const [lines, setLines] = useState<LineType[]>([]);

  const [form, setForm] = useState({});

  let currentSequence = 0;

  const injectUniqueID = (command: Omit<LineType, 'id'>) => {
    return { ...command, id: nanoid() };
  };

  const getLineOnSequence = (seq: number) => {
    currentSequence += 1;
    return injectUniqueID(commands[seq].props);
  };

  const addNewLines = (...newLines: LineType[]) => {
    return setLines((prev) => [...prev, ...newLines]);
  };

  const setValueOnForm = (key: string, val: string | number) => {
    return setForm((prev) => ({ ...prev, [key]: val }));
  };

  const executeCurrentLine = async (value: string) => {
    const currentLine = lines[lines.length - 1];

    if (currentLine.render.type === 'printLine') return;

    const { defaultValue, onEnter, formKey } = currentLine;

    if (!onEnter) return;

    const commandValue = value || defaultValue;

    const result = await onEnter(commandValue, form);

    if (result.status === 'error') {
      addNewLines(
        injectUniqueID(result),
        getLineOnSequence(result.nextSequence),
      );
    } else {
      if (result.nextSequence) {
        currentSequence = result.nextSequence;
        addNewLines(getLineOnSequence(currentSequence));
      }

      if (formKey) {
        setValueOnForm(formKey, commandValue);
      }
    }
  };

  useEffect(() => {
    if (lines.length !== 0) return;

    const firstLine = getLineOnSequence(currentSequence);

    if (firstLine.render.type === 'readLine') {
      addNewLines(firstLine);
    } else {
      addNewLines(firstLine, getLineOnSequence(currentSequence));
    }
  }, []);

  return [lines, executeCurrentLine];
};

export default useShellLine;
