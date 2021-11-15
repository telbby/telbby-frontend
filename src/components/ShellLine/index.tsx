import React, { ReactElement, useState } from 'react';

import { USER_PW_MAX_LENGTH } from '@/constants/validation';

import {
  defaultMessageStyle,
  defaultTypeStyle,
  errorMessageStyle,
  errorTypeStyle,
  inputStyle,
  readLineMessageStyle,
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
  const [inputWidth, setInputWidth] = useState(1);
  const changeInputWidth = (e: { target: HTMLInputElement }) =>
    setInputWidth(e.target.value.length);

  return (
    <>
      <span css={defaultTypeStyle}>{type} </span>
      <label htmlFor="readline" css={readLineMessageStyle}>
        {`${message}: `}
      </label>
      <input
        type={isPassword ? 'password' : 'text'}
        css={(theme) => inputStyle({ theme, width: `${inputWidth}ch` })}
        maxLength={USER_PW_MAX_LENGTH + 1}
        disabled={disabled}
        autoComplete="off"
        id="readline"
        onChange={changeInputWidth}
      />
    </>
  );
};

const ShellPrintLine = ({ type, message, disabled }: ShellLineProps) => {
  const isError = type === ShellLineType.Error;
  return (
    <>
      {isError && <span css={errorTypeStyle}>ERROR: </span>}
      <label
        htmlFor="printline"
        css={isError ? errorMessageStyle : defaultMessageStyle}
      >
        {message}
      </label>
      {!isError && (
        <input
          type="text"
          css={(theme) => inputStyle({ theme })}
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
