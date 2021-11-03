import { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { LoginRequestBody } from '@/apis/types';
import * as usersApi from '@/apis/users';
import { signupError } from '@/constants/error';
import Uri from '@/constants/uri';

const useSignup = (): {
  signup: ({ id, password }: LoginRequestBody) => Promise<void>;
  isLoading: boolean;
  error: string;
} => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const history = useHistory();

  const signup = async ({ id, password }: LoginRequestBody) => {
    try {
      setIsLoading(true);

      await usersApi.signup({ id, password });

      // @TODO 회원가입 성공 시 로그인 페이지로 이동
      history.replace(Uri.home);
    } catch (e) {
      if (signupError[e.response.status]) {
        setError(signupError[e.response.status]);
        throw e;
      }
    } finally {
      setIsLoading(false);
    }
  };

  return {
    signup,
    isLoading,
    error,
  };
};

export default useSignup;
