import React, { FC } from 'react';

import { authApi } from '@/apis';
import Shell from '@/components/Shell';
import Jumbotron from '@/components/common/Jumbotron';
import Logo from '@/components/common/Logo';
import { NETWORK_ERROR, UNEXPECTED_ERROR, loginError } from '@/constants/error';
import { LoginRequestBody } from '@/types';

import { footerStyle, headerStyle, layoutStyle } from './style';

const SigninPage: FC = () => {
  const requestSignin = async (body: LoginRequestBody) => {
    try {
      await authApi.login(body);
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
          width={789}
          height={247}
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
