import { SerializedStyles, Theme, css } from '@emotion/react';

export const titleStyle = (theme: Theme): SerializedStyles => css`
  font-family: ${theme.fontCoding};
`;
