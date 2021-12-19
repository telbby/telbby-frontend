import { SerializedStyles, Theme, css } from '@emotion/react';
import zIndexes from '@/styles/zIndexes';

export const loaderWrapperStyle = css`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: ${zIndexes.loader};
`;

export const spinnerStyle = (theme: Theme): SerializedStyles => css`
  @keyframes spinner {
    0% {
      transform: rotate(360deg);
    }
  }
  margin: 0 auto;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 6px solid ${theme.colorPrimaryLight};
  border-top-color: ${theme.colorPrimary};
  animation: spinner 600ms linear infinite;
`;
