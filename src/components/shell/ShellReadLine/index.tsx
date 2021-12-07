import React, { ReactElement } from 'react';

import {
  defaultPrefixStyle,
  inputStyle,
  readLineMessageStyle,
  shellLineContainerStyle,
} from './style';

type ShellReadLineProps = {
  prefix: 'question' | 'config';
  message: string;
  maxLength?: number;
};

const ShellReadLine = ({
  prefix,
  message,
  maxLength,
}: ShellReadLineProps): ReactElement => {
  const isPassword = message === 'password';

  return (
    <div css={shellLineContainerStyle}>
      <span css={defaultPrefixStyle}>{prefix}</span>
      <span css={readLineMessageStyle}>{`${message}:`}</span>
      <span css={inputStyle}>
        <input
          type={isPassword ? 'password' : 'text'}
          maxLength={maxLength}
          autoComplete="off"
        />
      </span>
    </div>
  );
};

ShellReadLine.defaultProps = {
  maxLength: 100,
};

export default ShellReadLine;
