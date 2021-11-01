import React, { ReactElement } from 'react';

import * as S from './style';

export type ShellLineProps = {
  lineType: string;
  lineTitle: string;
  inputType?: string;
};

const ShellLine = ({
  lineType,
  lineTitle,
  inputType,
}: ShellLineProps): ReactElement => (
  <label htmlFor={lineTitle}>
    <span css={S.LineType}>{lineType} </span>
    <span css={S.LineLabel}>{lineTitle}: </span>
    <input type={inputType} id={lineTitle} css={S.LineInput} />
  </label>
);

ShellLine.defaultProps = {
  inputType: 'text',
};

export default ShellLine;
