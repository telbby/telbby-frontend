import { SerializedStyles, Theme, css } from '@emotion/react';

export const ItemBoxStyle = (theme: Theme): SerializedStyles => css`
  box-sizing: border-box;
  width: 90%;
  height: 120px;
  background: ${theme.colorWhite};
  box-shadow: 1px 3px 20px 3px rgba(0, 83, 191, 0.1);
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 20px;
  font-family: ${theme.fontCoding};
`;
