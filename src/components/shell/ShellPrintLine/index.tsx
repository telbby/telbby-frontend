import React, { ReactElement } from 'react';

import {
  defaultMessageStyle,
  errorMessageStyle,
  errorPrefixStyle,
  inputStyle,
  shellLineContainerStyle,
} from './style';

type ShellPrintLineProps = {
  prefix: string;
  message: string;
};

const ShellPrintLine = ({
  prefix,
  message,
}: ShellPrintLineProps): ReactElement => (
  <div css={shellLineContainerStyle}>
    {prefix === 'error' && <span css={errorPrefixStyle}>ERROR: </span>}
    <label
      htmlFor="printline"
      css={prefix === 'error' ? errorMessageStyle : defaultMessageStyle}
    >
      {message}
    </label>
    {prefix !== 'error' && (
      <span css={inputStyle}>
        <input type="text" maxLength={0} id="printline" />
      </span>
    )}
  </div>
);

export default ShellPrintLine;
