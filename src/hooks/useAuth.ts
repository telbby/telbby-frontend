import * as authApi from '@/apis/auth';
import { User } from '@/apis/types';
import { useUserState } from '@/atoms/userState';

const useAuth = (): { authorize: (user: User) => void; logout: () => void } => {
  const [, setUserState] = useUserState();
  const authorize = (user: User) => setUserState(user);

  const logout = () => {
    setUserState(null);
    authApi.logout().catch(() => {
      /* 로그아웃의 경우, 별도의 에러 처리를 하지 않음 */
    });
  };

  return {
    authorize,
    logout,
  };
};

export default useAuth;
