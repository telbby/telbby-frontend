import { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { authApi } from '@/apis';
import { useSetUserState } from '@/atoms/userState';
import { NETWORK_ERROR, UNEXPECTED_ERROR, loginError } from '@/constants/error';
import Uri from '@/constants/uri';
import { LoginRequestBody } from '@/types';

const useAuth = (): {
  login: ({ userId, password }: LoginRequestBody) => Promise<void>;
  logout: () => void;
  isLoading: boolean;
  error: string;
} => {
  const setUserState = useSetUserState();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const history = useHistory();

  const login = async ({ userId, password }: LoginRequestBody) => {
    try {
      setIsLoading(true);

      await authApi.login({ userId, password });

      setUserState((prev) => ({ ...prev, userId }));

      setIsLoading(false);

      history.replace(Uri.service);
    } catch (e) {
      if (e.response) {
        if (loginError[e.response.status]) {
          setError(loginError[e.response.status]);
        } else {
          setError(UNEXPECTED_ERROR);
        }
      } else {
        setError(NETWORK_ERROR);
      }

      setIsLoading(false);

      throw e;
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
