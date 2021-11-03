import { useEffect, useState } from 'react';

import * as authApi from '@/apis/auth';
import { useUserState } from '@/atoms/userState';

const useAutoLogin = (): { loading: boolean; isLoggedIn: boolean } => {
  const [userState] = useUserState();

  const [loading, setLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setLoading(true);

    // @TODO refresh API 성공 시, 사용자 정보 가져오는 API를 호출하여 사용자 상태로 저장
    authApi
      .refresh()
      .then(() => setIsLoggedIn(true))
      .catch(() => setIsLoggedIn(false))
      .then(() => setLoading(false));
  }, [userState]);

  return { loading, isLoggedIn };
};

export default useAutoLogin;
