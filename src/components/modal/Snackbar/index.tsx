import React, { FC, useEffect, useState } from 'react';

import {
  snackbarWrapperStyle,
  snackbarHideStyle,
  snackbarShowStyle,
} from './style';

type SnackbarProps = {
  isOpen?: boolean;
  message?: string;
};

const Snackbar: FC<SnackbarProps> = ({ isOpen, message }) => {
  const [isShowing, setIsShowing] = useState(false);
  const visibleStyle =
    isOpen && isShowing ? snackbarShowStyle : snackbarHideStyle;

  useEffect(() => isOpen && setIsShowing(true), [isOpen]);
  const hideMessageAfterFadeOutAnimation = () => !isOpen && setIsShowing(false);

  return (
    <div
      css={[snackbarWrapperStyle, visibleStyle]}
      onTransitionEnd={hideMessageAfterFadeOutAnimation}
    >
      {isShowing ? message : ''}
    </div>
  );
};

Snackbar.defaultProps = {
  isOpen: false,
  message: '',
};

export default Snackbar;
