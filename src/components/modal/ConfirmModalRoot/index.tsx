import React, { FC, useCallback } from 'react';
import { useConfirmModalState } from '@/atoms/confirmModalState';
import ModalPortal from '@/components/modal/ModalPortal';
import ConfirmModal from '@/components/modal/ConfirmModal';

const ConfirmModalRoot: FC = () => {
  const [confirmModalState, setConfirmModalState] = useConfirmModalState();
  const {
    isOpen,
    message,
    cancelContent,
    acceptContent,
    cancelHandler,
    acceptHandler,
  } = confirmModalState;

  const closeHandler = useCallback(() => {
    setConfirmModalState((prevState) => ({ ...prevState, isOpen: false }));
  }, []);

  const emptyHandler = useCallback(() => {}, []);

  return (
    <ModalPortal>
      <ConfirmModal
        isOpen={isOpen}
        message={message}
        cancelContent={cancelContent}
        acceptContent={acceptContent}
        cancelHandler={cancelHandler ?? emptyHandler}
        acceptHandler={acceptHandler ?? emptyHandler}
        closeHandler={closeHandler}
      />
    </ModalPortal>
  );
};

export default ConfirmModalRoot;
