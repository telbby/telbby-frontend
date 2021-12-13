import React, { FC } from 'react';
import { useHistory } from 'react-router-dom';

import { authApi } from '@/apis';
import Jumbotron from '@/components/common/Jumbotron';
import Logo from '@/components/common/Logo';
import ShellCommand from '@/components/shell/ShellCommand';
import Shell from '@/components/shell/ShellCopy';
import { reject, renderProps, resolve } from '@/components/shell/utils';
import { NETWORK_ERROR, UNEXPECTED_ERROR, loginError } from '@/constants/error';
import Uri from '@/constants/uri';
import { LoginRequestBody } from '@/types';

import { footerStyle, headerStyle, layoutStyle } from './style';

const SigninPage: FC = () => {
  const { push } = useHistory();

  return (
    <div css={layoutStyle}>
      <header css={headerStyle}>
        <Logo onlyImg width="70px" />
        <Jumbotron title="Sign in" />
      </header>
      <main>
        <Shell width="789px" height="247px">
          <ShellCommand
            sequence={0}
            nextSequence={1}
            render={renderProps('printLine', '', 'telbby init v0.1.0')}
          />
          <ShellCommand
            sequence={1}
            nextSequence={2}
            render={renderProps('readLine', 'question', 'username')}
            formKey="userId"
            maxLength={30}
            onEnter={async (val) => {
              if (!val.length) return reject(1, 'Please enter your ID');
              return resolve(2);
            }}
          />
          <ShellCommand
            sequence={2}
            nextSequence={3}
            formKey="password"
            maxLength={35}
            render={renderProps('readLine', 'question', 'password')}
            onEnter={async (val) => {
              if (!val.length) return reject(2, 'Please enter your Password');
              return resolve(3);
            }}
          />
          <ShellCommand
            sequence={3}
            nextSequence={4}
            defaultValue="y"
            maxLength={1}
            render={renderProps('readLine', 'question', 'Sign in? [y/n]')}
            onEnter={async (val, body: LoginRequestBody) => {
              if (val !== 'y') return reject(2, 'Access denied');

              try {
                await authApi.login(body);
                push(Uri.service);
                return resolve(4);
              } catch (error) {
                if (!error.response) return reject(1, NETWORK_ERROR);

                const { status } = error.response;
                if (loginError[status]) return reject(1, loginError[status]);

                return reject(1, UNEXPECTED_ERROR);
              }
            }}
          />
        </Shell>
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
