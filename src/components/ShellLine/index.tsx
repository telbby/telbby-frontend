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
    <span css={lineType === 'ERROR' ? S.LineErrorType : S.LineType}>
      {lineType !== 'NORMAL' && lineType}
      {lineType === 'ERROR' && ':'}{' '}
    </span>
    <span css={lineType === 'ERROR' ? S.LineErrorLabel : S.LineLabel}>
      {lineTitle}
      {!['ERROR', 'NORMAL'].includes(lineType) && ':'}{' '}
    </span>
    {lineType !== 'ERROR' && (
      <input
        type={inputType}
        id={lineTitle}
        css={S.LineInput}
        maxLength={lineType === 'NORMAL' ? 0 : 15}
      />
    )}
  </label>
);

ShellLine.defaultProps = {
  inputType: 'text',
};

export default ShellLine;