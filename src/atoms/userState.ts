import { SetterOrUpdater, atom, useRecoilState } from 'recoil';

import { User } from '@/apis/dto';

const userState = atom<User | null>({
  key: 'userState',
  default: null,
});

export const useUserState = (): [User, SetterOrUpdater<User>] => {
  return useRecoilState(userState);
};
