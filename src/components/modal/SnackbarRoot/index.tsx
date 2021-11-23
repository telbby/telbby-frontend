import React, { FC } from 'react';

import { useSnackbarStateValue } from '@/atoms/snackbarState';
import ModalPortal from '@/components/modal/ModalPortal';
import Snackbar from '@/components/modal/Snackbar';

const SnackbarRoot: FC = () => {
  const snackbarState = useSnackbarStateValue();
  const { isOpen, message } = snackbarState;

  return (
    <ModalPortal>
      <Snackbar isOpen={isOpen} message={message} />
    </ModalPortal>
  );
};

export default SnackbarRoot;
