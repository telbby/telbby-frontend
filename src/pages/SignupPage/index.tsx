import React, { FC } from 'react';

import { userApi } from '@/apis';
import Shell from '@/components/Shell';
import Jumbotron from '@/components/common/Jumbotron';
import Logo from '@/components/common/Logo';
import {
  NETWORK_ERROR,
  UNEXPECTED_ERROR,
  signupError,
} from '@/constants/error';
import { LoginRequestBody } from '@/types';

import { footerStyle, headerStyle, layoutStyle } from './style';

const SignupPage: FC = () => {
  const requestSignup = async (body: LoginRequestBody) => {
    try {
      await userApi.signup(body);
    } catch (error) {
      if (!error.response) throw new Error(NETWORK_ERROR);

      const { status } = error.response;
      if (signupError[status]) throw new Error(signupError[status]);

      throw new Error(UNEXPECTED_ERROR);
    }
  };

  return (
    <div css={layoutStyle}>
      <header css={headerStyle}>
        <a href="/">
          <Logo onlyImg width="70px" />
          <Jumbotron title="Join" />
        </a>
      </header>
      <main>
        <Shell
          type="signup"
          requestWhenQueryDone={requestSignup}
          width="789px"
          height="247px"
        />
      </main>
      <footer css={footerStyle}>
        <p>
          Already have an account? <a href="/signin">Sign In</a>
        </p>
      </footer>
    </div>
  );
};

export default SignupPage;
