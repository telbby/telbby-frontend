import { SetterOrUpdater, atom, useRecoilState } from 'recoil';

import { User } from '@/apis/types';

const userState = atom<User | null>({
  key: 'userState',
  default: null,
});

export const useUserState = (): [User, SetterOrUpdater<User>] => {
  return useRecoilState(userState);
};
