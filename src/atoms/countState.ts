import {
  atom,
  useRecoilValue,
  useSetRecoilState,
  SetterOrUpdater,
} from 'recoil';

const countState = atom({
  key: 'countState',
  default: 0,
});

export const useCountValue = (): number => {
  return useRecoilValue(countState);
};

export const useSetCount = (): SetterOrUpdater<number> => {
  return useSetRecoilState(countState);
};
