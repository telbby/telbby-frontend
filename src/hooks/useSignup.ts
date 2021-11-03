import { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { LoginRequestBody } from '@/apis/types';
import * as usersApi from '@/apis/users';
import { signupError } from '@/constants/error';

import useAuth from './useAuth';

const useSignup = (): {
  signup: ({ id, password }: LoginRequestBody) => Promise<void>;
  loading: boolean;
  error: string;
} => {
  const { authorize } = useAuth();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const history = useHistory();

  const signup = async ({ id, password }: LoginRequestBody) => {
    try {
      setLoading(true);

      const { idx } = await usersApi.signup({ id, password });
      const user = { idx, id };

      authorize(user);
      history.replace('/');
    } catch (e) {
      if (signupError[e.response.status]) {
        setError(signupError[e.response.status]);
        throw e;
      }
    } finally {
      setLoading(false);
    }
  };

  return {
    signup,
    loading,
    error,
  };
};

export default useSignup;
