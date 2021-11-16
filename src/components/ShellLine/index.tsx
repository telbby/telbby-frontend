import React, { ReactElement } from 'react';

import { MAX_SHELL_INPUT_LENGTH } from '@/constants/shell';

import {
  DefaultMessageStyle,
  DefaultTypeStyle,
  ErrorMessageStyle,
  ErrorTypeStyle,
  InputStyle,
} from './style';

export enum ShellLineType {
  Question = 'question',
  Config = 'config',
  Error = 'error',
  Default = 'default',
}

export type ShellLineProps = {
  type: ShellLineType;
  message: string;
  disabled?: boolean;
};

const ShellReadLine = ({ type, message, disabled }: ShellLineProps) => {
  const isPassword = message === 'password';
  return (
    <>
      <span css={DefaultTypeStyle}>{type} </span>
      <label htmlFor="readline" css={DefaultMessageStyle}>
        {`${message}: `}
      </label>
      <input
        type={isPassword ? 'password' : 'text'}
        css={InputStyle}
        maxLength={MAX_SHELL_INPUT_LENGTH}
        disabled={disabled}
        autoComplete="off"
        id="readline"
      />
    </>
  );
};

const ShellPrintLine = ({ type, message, disabled }: ShellLineProps) => {
  const isError = type === ShellLineType.Error;
  return (
    <>
      {isError && <span css={ErrorTypeStyle}>ERROR: </span>}
      <label
        htmlFor="printline"
        css={isError ? ErrorMessageStyle : DefaultMessageStyle}
      >
        {message}
      </label>
      {!isError && (
        <input
          type="text"
          css={InputStyle}
          maxLength={0}
          disabled={disabled}
          id="printline"
        />
      )}
    </>
  );
};

const ShellLine = ({
  type,
  message,
  disabled,
}: ShellLineProps): ReactElement => {
  const isReadLine = [ShellLineType.Question, ShellLineType.Config].includes(
    type,
  );

  return (
    <div>
      {isReadLine ? (
        <ShellReadLine type={type} message={message} disabled={disabled} />
      ) : (
        <ShellPrintLine type={type} message={message} disabled={disabled} />
      )}
    </div>
  );
};

export default ShellLine;
