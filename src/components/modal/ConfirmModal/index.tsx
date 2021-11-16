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
  isOpen?: boolean;
  message?: string;
  cancelContent?: string;
  acceptContent?: string;
  cancelHandler?: () => void;
  acceptHandler?: () => void;
  closeHandler?: () => void;
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
    if (cancelHandler) cancelHandler();
  };

  const acceptAndClose = () => {
    closeHandler();
    if (acceptHandler) acceptHandler();
  };

  const handleClickOutside = ({ target }) => {
    if (isOpen && closeHandler && !modalEl.current.contains(target)) {
      closeHandler();
    }
  };

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('click', handleClickOutside);
    }
    return () => window.removeEventListener('click', handleClickOutside);
  }, [isOpen, closeHandler]);

  return (
    isOpen && (
      <Overlay>
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
    )
  );
};

ConfirmModal.defaultProps = {
  isOpen: false,
  message: '',
  cancelContent: 'cancel',
  acceptContent: 'accept',
  cancelHandler: null,
  acceptHandler: null,
  closeHandler: null,
};

export default ConfirmModal;
