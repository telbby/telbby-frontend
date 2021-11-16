import React, { FC, useRef, useEffect } from 'react';

import Overlay from '@/components/modal/Overlay';
import {
  modalWrapperStyle,
  modalInnerStyle,
  modalMessageStyle,
  modalButtonWrapperStyle,
  modalAcceptButtonStyle,
  modalCancelButtonStyle,
} from './style';

type ConfirmModalProps = {
  isOpen: boolean;
  message: string;
  cancelContent: string;
  acceptContent: string;
  cancelHandler: () => void;
  acceptHandler: () => void;
  closeHandler: () => void;
};

const ConfirmModal: FC<ConfirmModalProps> = ({
  isOpen,
  message,
  cancelContent,
  acceptContent,
  cancelHandler,
  acceptHandler,
  closeHandler,
}) => {
  const modalEl = useRef(null);

  const cancelAndClose = () => {
    closeHandler();
    cancelHandler();
  };

  const acceptAndClose = () => {
    closeHandler();
    acceptHandler();
  };

  const handleClickOutside = ({ target }) => {
    if (isOpen && !modalEl.current.contains(target)) {
      closeHandler();
    }
  };

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('click', handleClickOutside);
    }
    return () => window.removeEventListener('click', handleClickOutside);
  }, [isOpen]);

  return (
    <Overlay visible={isOpen} animation={false}>
      <div css={modalWrapperStyle}>
        <div ref={modalEl} css={modalInnerStyle}>
          <div css={modalMessageStyle}>{message}</div>

          <div css={modalButtonWrapperStyle}>
            <button
              type="button"
              onClick={cancelAndClose}
              css={modalCancelButtonStyle}
            >
              {cancelContent}
            </button>
            <button
              type="button"
              onClick={acceptAndClose}
              css={modalAcceptButtonStyle}
            >
              {acceptContent}
            </button>
          </div>
        </div>
      </div>
    </Overlay>
  );
};

export default ConfirmModal;
