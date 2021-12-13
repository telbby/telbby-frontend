import React, { ReactElement, useEffect } from 'react';

import useShellLine from '@/hooks/useShellLine';

import useFocusOnLastInput from '../../../hooks/useFocusOnLastInput';
import ShellPrintLine from '../ShellPrintLine';
import ShellReadLine from '../ShellReadLine';
import { fieldsetStyle, formStyle, shellContainerStyle } from './style';

type ShellProps = {
  width: string;
  height: string;
  children: ReactElement[];
};

const Shell = ({
  width,
  height,
  children: commands,
}: ShellProps): ReactElement => {
  const [lines, executeCurrentCommand] = useShellLine(commands);

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
            line.render.type === 'printLine' ? (
              <ShellPrintLine
                key={line.id}
                prefix={line.render.prefix}
                message={line.render.message}
              />
            ) : (
              <ShellReadLine
                key={line.id}
                prefix={line.render.prefix}
                message={line.render.message}
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
