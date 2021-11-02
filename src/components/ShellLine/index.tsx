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
    <span css={lineType === 'ERROR' ? S.LineErrorType : S.LineType}>
      {lineType !== 'NORMAL' && lineType}
      {lineType === 'ERROR' && ':'}{' '}
    </span>
    <span css={lineType === 'ERROR' ? S.LineErrorLabel : S.LineLabel}>
      {lineTitle}
      {!['ERROR', 'NORMAL'].includes(lineType) && ':'}{' '}
    </span>
    {!['ERROR', 'NORMAL'].includes(lineType) && (
      <input type={inputType} id={lineTitle} css={S.LineInput} />
    )}
  </label>
);

ShellLine.defaultProps = {
  inputType: 'text',
};

export default ShellLine;
