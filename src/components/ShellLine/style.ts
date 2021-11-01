import { SerializedStyles, Theme, css } from '@emotion/react';

export const LineType = (theme: Theme): SerializedStyles => css`
  color: ${theme.colorGray3};
`;

export const LineErrorType = (theme: Theme): SerializedStyles => css`
  color: ${theme.colorError};
`;

export const LineLabel = (theme: Theme): SerializedStyles => css`
  color: ${theme.colorGray1};
`;

export const LineErrorLabel = (theme: Theme): SerializedStyles => css`
  color: ${theme.colorGray3};
`;

export const LineInput = css`
  all: unset;
`;
