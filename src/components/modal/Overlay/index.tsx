import React, { FC } from 'react';
import { overlayInnerStyle, overlayWrapperStyle } from './style';

type OverlayProps = {
  children: React.ReactNode;
  visible?: boolean;
  animation?: boolean;
  duration?: number;
};

const Overlay: FC<OverlayProps> = ({
  children,
  visible,
  animation,
  duration,
}) => {
  const visibleStyle = { height: visible ? '100%' : '0%' };
  const animationStyle = animation
    ? { transition: `${duration}ms height` }
    : undefined;

  return (
    <div css={[overlayWrapperStyle, visibleStyle, animationStyle]}>
      <div css={[overlayInnerStyle, visibleStyle, animationStyle]}>
        {children}
      </div>
    </div>
  );
};

Overlay.defaultProps = {
  visible: true,
  animation: true,
  duration: 500,
};

export default Overlay;
