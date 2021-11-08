import { SerializedStyles, Theme, css } from '@emotion/react';

export const Type = (theme: Theme): SerializedStyles => css`
  color: ${theme.colorGray3};
`;

export const ErrorType = (theme: Theme): SerializedStyles => css`
  color: ${theme.colorError};
`;

export const DefaultContent = (theme: Theme): SerializedStyles => css`
  color: ${theme.colorGray1};
`;

export const ErrorContent = (theme: Theme): SerializedStyles => css`
  color: ${theme.colorGray3};
`;

export const Input = (theme: Theme): SerializedStyles => css`
  all: unset;
  caret-color: ${theme.colorPrimary};
`;
