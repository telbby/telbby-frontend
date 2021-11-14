import React, { FC } from 'react';

import Shell from '@/components/Shell';
import Jumbotron from '@/components/common/Jumbotron';
import Logo from '@/components/common/Logo';

import { footerStyle, headerStyle, layoutStyle } from './style';

const SignupPage: FC = () => {
  const requestWhenQuestionDone = async () =>
    new Promise((resolve, reject) => {
      setTimeout(
        // () => resolve('Success'),
        () => reject(new Error('Not valid domain. Telbby is great you know?')),
        1000,
      );
    });
  return (
    <div css={layoutStyle}>
      <header css={headerStyle}>
        <Logo onlyImg width="70px" />
        <Jumbotron title="Join" />
      </header>
      <main>
        <Shell
          type="signup"
          requestWhenQuestionDone={requestWhenQuestionDone}
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
