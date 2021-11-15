import { SerializedStyles, Theme, css } from '@emotion/react';

export const DefaultTypeStyle = (theme: Theme): SerializedStyles => css`
  color: ${theme.colorGray3};
`;

export const ErrorTypeStyle = (theme: Theme): SerializedStyles => css`
  color: ${theme.colorError};
`;

export const DefaultMessageStyle = (theme: Theme): SerializedStyles => css`
  color: ${theme.colorGray2};
`;

export const ReadLineMessageStyle = (theme: Theme): SerializedStyles => css`
  color: ${theme.colorGray1};
`;

export const ErrorMessageStyle = (theme: Theme): SerializedStyles => css`
  color: ${theme.colorGray3};
`;

type InputStyleProp = {
  theme: Theme;
  width?: string;
};

export const InputStyle = ({
  theme,
  width,
}: InputStyleProp): SerializedStyles => css`
  all: unset;
  width: ${width ?? '1ch'};
  caret-color: ${theme.colorPrimary};
  color: ${theme.colorGray1};
`;
