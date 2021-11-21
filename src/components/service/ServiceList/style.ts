import { SerializedStyles, Theme, css } from '@emotion/react';

export const wrapperStyle = css`
  margin: 50px 0;
`;

export const headerStyle = (theme: Theme): SerializedStyles => css`
  font-family: ${theme.fontCodingBold};
  color: ${theme.colorPrimary};
  font-size: 26px;
  margin: 30px 0;
`;
