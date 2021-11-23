import {
  SetterOrUpdater,
  atom,
  useRecoilValue,
  useSetRecoilState,
  useRecoilState,
} from 'recoil';

export type ConfirmModalStateType = {
  isOpen: boolean;
  message: string;
  cancelContent: string;
  acceptContent: string;
  cancelHandler: () => void;
  acceptHandler: () => void;
};

const initialState: ConfirmModalStateType = {
  isOpen: false,
  message: '',
  cancelContent: 'cancel',
  acceptContent: 'accept',
  cancelHandler: null,
  acceptHandler: null,
};

const confirmModalState = atom({
  key: 'confirmModalState',
  default: initialState,
});

export const useConfirmModalState = (): [
  ConfirmModalStateType,
  SetterOrUpdater<ConfirmModalStateType>,
] => {
  return useRecoilState(confirmModalState);
};

export const useConfirmModalStateValue = (): ConfirmModalStateType => {
  return useRecoilValue(confirmModalState);
};

export const useSetConfirmModalState =
  (): SetterOrUpdater<ConfirmModalStateType> => {
    return useSetRecoilState(confirmModalState);
  };
