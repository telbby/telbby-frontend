import { useEffect, useState } from 'react';

import { authApi } from '@/apis';
import { useUserState } from '@/atoms/userState';

const useAutoLogin = (): { isLoading: boolean; isLoggedIn: boolean } => {
  const [user, setUserState] = useUserState();

  const [isLoading, setIsLoading] = useState(false);

  const autoLogin = async () => {
    try {
      const userId = localStorage.getItem('userId');
      if (!userId) return;

      setIsLoading(true);

      await authApi.refresh();

      setUserState({ userId });
    } catch (e) {
      /* 
        따로 에러 핸들링 해야할 것으로 보입니다.
        refresh를 실패했다는 것은 곧 refresh token이 만료되었을 경우가 대부분일테니
        이에 따라서 다시 로그인 해달라는 창을 보여주는 것이 어떨지.. toastify 처럼..
      */
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    autoLogin();
  }, []);

  return { isLoading, isLoggedIn: user !== null };
};

export default useAutoLogin;
