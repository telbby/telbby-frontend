import React, { ReactElement } from 'react';

import { MAX_SHELL_INPUT_LENGTH } from '@/constants/shell';

import * as S from './style';

export enum ShellLineType {
  Question = 'question',
  Config = 'config',
  Error = 'error',
  Default = 'default',
}

export type ShellLineProps = {
  type: ShellLineType;
  content: string;
  disabled?: boolean;
};

const ShellLine = ({
  type,
  content,
  disabled,
}: ShellLineProps): ReactElement => {
  const isPassword = content === 'password';
  const isReadLine = [ShellLineType.Question, ShellLineType.Config].includes(
    type,
  );
  const isError = type === ShellLineType.Error;

  return (
    <label htmlFor={content}>
      {isReadLine ? (
        <>
          <span css={S.Type}>{type} </span>
          <span css={S.DefaultContent}>{content}: </span>
          <input
            type={isPassword ? 'password' : 'text'}
            css={S.Input}
            maxLength={MAX_SHELL_INPUT_LENGTH}
            disabled={disabled}
            data-testid="shell-line-input"
            autoComplete="off"
            alt="input"
          />
        </>
      ) : (
        <>
          {isError && <span css={S.ErrorType}>ERROR: </span>}
          <span css={isError ? S.ErrorContent : S.DefaultContent}>
            {content}
          </span>
          {!isError && (
            <input
              type="text"
              css={S.Input}
              maxLength={0}
              disabled={disabled}
              data-testid="shell-line-input"
            />
          )}
        </>
      )}
    </label>
  );
};

export default ShellLine;
