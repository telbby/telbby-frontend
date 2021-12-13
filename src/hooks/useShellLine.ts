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

  const injectUniqueID = (command: Omit<LineType, 'id'>) => {
    return { ...command, id: nanoid() };
  };

  const getLineOnSequence = (seq: number) => {
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

    const commandValue = value || defaultValue;

    const result = await onEnter(commandValue, form);

    if (result.status === 'error') {
      addNewLines(
        injectUniqueID(result),
        getLineOnSequence(result.nextSequence),
      );
    } else {
      addNewLines(getLineOnSequence(result.nextSequence));

      if (formKey) setValueOnForm(formKey, commandValue);
    }
  };

  useEffect(() => {
    if (lines.length !== 0) return;

    const firstLine = getLineOnSequence(0);

    if (firstLine.render.type === 'readLine') addNewLines(firstLine);
    else addNewLines(firstLine, getLineOnSequence(firstLine.nextSequence));
  }, []);

  return [lines, executeCurrentLine];
};

export default useShellLine;
