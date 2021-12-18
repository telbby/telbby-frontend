import { SerializedStyles, Theme, css } from '@emotion/react';

export const chatroomWrapperStyle = (theme: Theme): SerializedStyles => css`
  width: 100%;
  color: ${theme.colorPrimary};
`;

export const chatInputStyle = (theme: Theme): SerializedStyles => css`
  width: 100%;
  color: ${theme.colorPrimary};
`;
