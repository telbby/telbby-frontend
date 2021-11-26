import { SerializedStyles, Theme, css } from '@emotion/react';

export const wrapperStyle = (theme: Theme): SerializedStyles => css`
  width: 100%;
  margin-top: 100px;
  padding: 90px 0;
  background-color: ${theme.colorPrimaryLight};
  border-radius: 20px;
  text-align: center;
  font-family: ${theme.fontBasic};
  font-weight: bold;
`;

export const descriptionStyle = (theme: Theme): SerializedStyles => css`
  color: ${theme.colorPrimary};
  font-size: 24px;
`;

export const titleStyle = (theme: Theme): SerializedStyles => css`
  color: ${theme.colorIndigo};
  font-size: 40px;
`;

export const goSignupLinkStyle = (theme: Theme): SerializedStyles => css`
  background-color: ${theme.colorSubLight};
  color: ${theme.colorWhite};
  font-size: 25px;
  margin-top: 40px;
  padding: 10px 100px;
  border-radius: 10px;
  display: inline-block;
`;
