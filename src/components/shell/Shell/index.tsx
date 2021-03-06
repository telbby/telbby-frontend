import React, { ReactElement, cloneElement, useEffect } from 'react';

import useShellLine from '@/hooks/useShellLine';

import useFocusOnLastInput from '../../../hooks/useFocusOnLastInput';
import ShellPrintLine from '../ShellPrintLine';
import ShellReadLine from '../ShellReadLine';
import { ShellCommandType } from '../types';
import { fieldsetStyle, formStyle, shellContainerStyle } from './style';

type ShellProps = {
  width: string;
  height: string;
  legend?: string;
  children: ReactElement[];
};

const Shell = ({
  width,
  height,
  legend,
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
          {legend && <legend>{legend}</legend>}
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

type ShellCommandProps = ShellCommandType;

Shell.Command = ({ ...props }: ShellCommandProps) => {
  return cloneElement(null, props);
};

Shell.defaultProps = {
  legend: '',
};

export default Shell;
