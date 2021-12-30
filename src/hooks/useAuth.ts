import { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { authApi } from '@/apis';
import { useUserState } from '@/atoms/userState';
import { NETWORK_ERROR, UNEXPECTED_ERROR, loginError } from '@/constants/error';
import Uri from '@/constants/uri';
import { LoginRequestBody, User } from '@/types';

const useAuth = (): {
  user: User;
  login: ({ userId, password }: LoginRequestBody) => Promise<void>;
  logout: () => void;
  isLoading: boolean;
  error: string;
} => {
  const [user, setUserState] = useUserState();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const history = useHistory();

  const login = async ({ userId, password }: LoginRequestBody) => {
    try {
      setIsLoading(true);

      await authApi.login({ userId, password });

      setUserState((prev) => ({ ...prev, userId }));

      localStorage.setItem('userId', userId);

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

    localStorage.removeItem('userId');

    authApi.logout();
  };

  return {
    user,
    login,
    logout,
    isLoading,
    error,
  };
};

export default useAuth;
