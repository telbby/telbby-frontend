import { SerializedStyles, Theme, css } from '@emotion/react';

export const navStyle = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 12%;
`;

export const yellowLineButton = (theme: Theme): SerializedStyles => css`
  padding: 7px 16px;
  font-family: ${theme.fontCodingBold};
  font-size: 15px;
  border: 1px solid ${theme.colorSub};
  border-radius: 6px;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.15);
  background: transparent;
  color: ${theme.colorSub};
  margin-right: 10px;
`;

export const yellowFullButton = (theme: Theme): SerializedStyles => css`
  padding: 7px 16px;
  font-family: ${theme.fontCodingBold};
  font-size: 15px;
  border: 1px solid ${theme.colorSub};
  border-radius: 6px;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.15);
  background-color: ${theme.colorSub};
  color: ${theme.colorWhite};
`;
