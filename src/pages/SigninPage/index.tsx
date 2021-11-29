import React, { FC } from 'react';
import { useHistory } from 'react-router-dom';

import { authApi } from '@/apis';
import Shell from '@/components/Shell';
import Jumbotron from '@/components/common/Jumbotron';
import Logo from '@/components/common/Logo';
import { NETWORK_ERROR, UNEXPECTED_ERROR, loginError } from '@/constants/error';
import Uri from '@/constants/uri';
import { LoginRequestBody } from '@/types';

import { footerStyle, headerStyle, layoutStyle } from './style';

const SigninPage: FC = () => {
  const { push } = useHistory();

  const requestSignin = async (body: LoginRequestBody) => {
    try {
      await authApi.login(body);
      push(Uri.service);
    } catch (error) {
      if (!error.response) throw new Error(NETWORK_ERROR);

      const { status } = error.response;
      if (loginError[status]) throw new Error(loginError[status]);

      throw new Error(UNEXPECTED_ERROR);
    }
  };

  return (
    <div css={layoutStyle}>
      <header css={headerStyle}>
        <Logo onlyImg width="70px" />
        <Jumbotron title="Sign in" />
      </header>
      <main>
        <Shell
          type="signin"
          requestWhenQueryDone={requestSignin}
          width="789px"
          height="247px"
        />
      </main>
      <footer css={footerStyle}>
        <p>
          Don’t have an account? <a href="/signup">Sign Up</a>
        </p>
      </footer>
    </div>
  );
};

export default SigninPage;
