import { SerializedStyles, Theme, css } from '@emotion/react';

export const defaultTypeStyle = (theme: Theme): SerializedStyles => css`
  color: ${theme.colorGray3};
`;

export const errorTypeStyle = (theme: Theme): SerializedStyles => css`
  color: ${theme.colorError};
`;

export const defaultMessageStyle = (theme: Theme): SerializedStyles => css`
  color: ${theme.colorGray2};
`;

export const readLineMessageStyle = (theme: Theme): SerializedStyles => css`
  color: ${theme.colorGray1};
`;

export const errorMessageStyle = (theme: Theme): SerializedStyles => css`
  color: ${theme.colorGray3};
`;

type InputStyleProp = {
  theme: Theme;
  width?: string;
};

export const inputStyle = ({
  theme,
  width,
}: InputStyleProp): SerializedStyles => css`
  all: unset;
  width: ${width ?? '1ch'};
  caret-color: ${theme.colorPrimary};
  color: ${theme.colorGray1};
`;
