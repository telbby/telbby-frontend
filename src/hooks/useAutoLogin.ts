import { useEffect, useState } from 'react';

import * as authApi from '@/apis/auth';
import { useUserState } from '@/atoms/userState';

const useAutoLogin = (): { loading: boolean; isLoggedIn: boolean } => {
  const [userState] = useUserState();

  const [loading, setLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setLoading(true);
    authApi
      .refresh()
      .then(() => {
        setIsLoggedIn(true);
        setLoading(false);
      })
      .catch(() => setIsLoggedIn(false));
  }, [userState]);

  return { loading, isLoggedIn };
};

export default useAutoLogin;
