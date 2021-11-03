import { useState } from 'react';
import { useHistory } from 'react-router-dom';

import * as authApi from '@/apis/auth';
import { LoginRequestBody } from '@/apis/types';
import { useUserState } from '@/atoms/userState';
import { loginError } from '@/constants/error';
import Uri from '@/constants/uri';

const useAuth = (): {
  login: ({ id, password }: LoginRequestBody) => Promise<void>;
  logout: () => void;
  isLoading: boolean;
  error: string;
} => {
  const [, setUserState] = useUserState();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const history = useHistory();

  const login = async ({ id, password }: LoginRequestBody) => {
    try {
      setIsLoading(true);

      await authApi.login({ id, password });

      // @TODO 로그인 성공 시 사용자 정보 가져오는 API 호출 후 상태로 저장

      history.replace(Uri.home);
    } catch (e) {
      if (loginError[e.response.status]) {
        setError(loginError[e.response.status]);
        throw e;
      }
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    setUserState(null);
    authApi.logout().catch(() => {
      /* 로그아웃의 경우, 별도의 에러 처리를 하지 않음 */
    });
  };

  return {
    login,
    logout,
    isLoading,
    error,
  };
};

export default useAuth;
