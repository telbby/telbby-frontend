import {
  SetterOrUpdater,
  atom,
  useRecoilValue,
  useSetRecoilState,
  useRecoilState,
} from 'recoil';

export type SnackbarStateType = {
  isOpen: boolean;
  message: string;
  color: string;
  backgroundColor: string;
};

const initialState: SnackbarStateType = {
  isOpen: false,
  message: '',
  color: '#fff',
  backgroundColor: '#000',
};

const snackbarState = atom({
  key: 'snackbarState',
  default: initialState,
});

export const useSnackbarState = (): [
  SnackbarStateType,
  SetterOrUpdater<SnackbarStateType>,
] => {
  return useRecoilState(snackbarState);
};

export const useSnackbarStateValue = (): SnackbarStateType => {
  return useRecoilValue(snackbarState);
};

export const useSetSnackbarState = (): SetterOrUpdater<SnackbarStateType> => {
  return useSetRecoilState(snackbarState);
};