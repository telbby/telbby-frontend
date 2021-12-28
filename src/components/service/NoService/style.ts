import { SerializedStyles, Theme, css } from '@emotion/react';

export const emptyStyle = (theme: Theme): SerializedStyles => css`
  text-align: center;

  img {
    width: 320px;
  }

  p {
    font-family: ${theme.fontCoding};
    font-size: 20px;
    color: ${theme.colorPrimary};
    margin-top: 5px;
  }
`;
