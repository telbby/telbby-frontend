import React, { FC } from 'react';
import { overlayInnerStyle, overlayWrapperStyle } from './style';

type OverlayProps = {
  children: React.ReactNode;
};

const Overlay: FC<OverlayProps> = ({ children }) => {
  return (
    <div css={overlayWrapperStyle}>
      <div css={overlayInnerStyle}>{children}</div>
    </div>
  );
};

export default Overlay;
