import React, { ReactElement, useEffect } from 'react';

import { ScriptCommand } from '@/types/shell';

import useFocusOnLastInput from '../../hooks/useFocusOnLastInput';
import useShellLine from '../../hooks/useShellLine';
import ShellPrintLine from '../ShellPrintLine';
import ShellReadLine from '../ShellReadLine';
import { fieldsetStyle, formStyle, shellContainerStyle } from './style';

type ShellProps = {
  script: readonly ScriptCommand[];
  width: string;
  height: string;
};

const Shell = ({ script, width, height }: ShellProps): ReactElement => {
  const [lines, executeCurrentCommand] = useShellLine(script);
  const [ref, focusOnLastInput] = useFocusOnLastInput<HTMLFieldSetElement>();

  const handleEnter = (e: React.KeyboardEvent) => {
    if (e.key !== 'Enter') return;

    executeCurrentCommand((e.target as HTMLInputElement).value);
  };

  useEffect(() => focusOnLastInput, [lines]);

  return (
    <div
      role="button"
      tabIndex={0}
      css={shellContainerStyle({ width, height })}
      onKeyPress={handleEnter}
      onClick={focusOnLastInput}
    >
      <form css={formStyle}>
        <fieldset ref={ref} css={fieldsetStyle}>
          <legend>Telbby Service Shell: </legend>
          {lines.map((line) =>
            line.type === 'printLine' ? (
              <ShellPrintLine
                key={line.id}
                prefix={line.prefix}
                message={line.message}
              />
            ) : (
              <ShellReadLine
                key={line.id}
                prefix={line.prefix}
                message={line.message}
                maxLength={line.maxLength}
              />
            ),
          )}
        </fieldset>
      </form>
    </div>
  );
};

export default Shell;
