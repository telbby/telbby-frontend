import React, { FC } from 'react';

import { useSnackbarStateValue } from '@/atoms/snackbarState';
import ModalPortal from '@/components/modal/ModalPortal';
import Snackbar from '@/components/modal/Snackbar';

const SnackbarRoot: FC = () => {
  const snackbarState = useSnackbarStateValue();
  const { isOpen, message, color, backgroundColor } = snackbarState;

  return (
    <ModalPortal>
      <Snackbar
        isOpen={isOpen}
        message={message}
        color={color}
        backgroundColor={backgroundColor}
      />
    </ModalPortal>
  );
};

export default SnackbarRoot;
