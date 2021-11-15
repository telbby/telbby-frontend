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
      let message: string;

      if (!error.response) message = NETWORK_ERROR;
      else {
        const { status } = error.response;
        message = status < 500 ? signupError[status] : UNEXPECTED_ERROR;
      }

      error.message = message;
      throw new Error(error);
    }
  };

  return (
    <div css={layoutStyle}>
      <header css={headerStyle}>
        <Logo onlyImg width="70px" />
        <Jumbotron title="Join" />
      </header>
      <main>
        <Shell
          type="signup"
          requestWhenQueryDone={requestSignup}
          width={789}
          height={247}
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
