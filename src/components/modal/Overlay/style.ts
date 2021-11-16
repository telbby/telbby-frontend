import { css } from '@emotion/react';
import zIndexes from '@/styles/zIndexes';

export const overlayWrapperStyle = css`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: ${zIndexes.Overlay};
  background-color: rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

export const overlayInnerStyle = css`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: ${zIndexes.OverlayInner};
  overflow: hidden;
`;
