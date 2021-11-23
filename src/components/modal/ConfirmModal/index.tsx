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
  closeModal?: () => void;
};

const ConfirmModal: FC<ConfirmModalProps> = ({
  isOpen,
  message,
  cancelContent,
  acceptContent,
  cancelHandler,
  acceptHandler,
  closeModal,
}) => {
  const modalEl = useRef(null);

  const modalButtonHandlerWithClose = (handler: () => void) => {
    if (closeModal) closeModal();
    if (handler) handler();
  };

  const cancelAndClose = () => modalButtonHandlerWithClose(cancelHandler);
  const acceptAndClose = () => modalButtonHandlerWithClose(acceptHandler);

  const handleClickOutside = ({ target }) => {
    if (isOpen && closeModal && !modalEl.current.contains(target)) {
      closeModal();
    }
  };

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('click', handleClickOutside);
    }
    return () => window.removeEventListener('click', handleClickOutside);
  }, [isOpen, closeModal]);

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
  closeModal: null,
};

export default ConfirmModal;
