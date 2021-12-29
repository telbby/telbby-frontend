import { SerializedStyles, Theme, css } from '@emotion/react';

export const shellLineContainerStyle = css`
  width: 100%;
  height: fit-content;
`;

export const defaultPrefixStyle = (theme: Theme): SerializedStyles => css`
  color: ${theme.colorGray3};
  margin-right: 12px;
  float: left;
`;

export const readLineMessageStyle = (theme: Theme): SerializedStyles => css`
  color: ${theme.colorGray1};
  float: left;

  ::after {
    content: ':';
  }
`;

export const inputStyle = (theme: Theme): SerializedStyles => css`
  display: block;
  overflow: hidden;
  padding-left: 8px;

  input {
    all: unset;
    width: 100%;
    caret-color: ${theme.colorPrimary};
    color: ${theme.colorGray1};
  }
`;
