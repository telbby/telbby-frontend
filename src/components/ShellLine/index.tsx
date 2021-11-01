import React, { ReactElement } from 'react';

import * as S from './style';

export type ShellLineProps = {
  lineType: string;
  lineTitle: string;
  inputType?: string;
  checkValidation?: (value: string) => boolean;
};

const ShellLine = ({
  lineType,
  lineTitle,
  inputType,
}: ShellLineProps): ReactElement => (
  <label htmlFor={lineTitle}>
    {lineType !== 'ERROR' && (
      <>
        <span css={S.LineType}>{lineType} </span>
        <span css={S.LineLabel}>{lineTitle}: </span>
        <input type={inputType} id={lineTitle} css={S.LineInput} />
      </>
    )}
    {lineType === 'ERROR' && (
      <>
        <span css={S.LineErrorType}>{lineType}: </span>
        <span css={S.LineErrorLabel}>{lineTitle}</span>
      </>
    )}
  </label>
);

ShellLine.defaultProps = {
  inputType: 'text',
};

export default ShellLine;
