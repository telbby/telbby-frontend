import React, { FC, useCallback } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { authApi } from '@/apis';
import { useSetUserState } from '@/atoms/userState';
import Jumbotron from '@/components/common/Jumbotron';
import Logo from '@/components/common/Logo';
import Shell from '@/components/shell/ShellCopy';
import { reject, renderProps, resolve } from '@/components/shell/helper';
import { NETWORK_ERROR, UNEXPECTED_ERROR, loginError } from '@/constants/error';
import Uri from '@/constants/uri';
import { LoginRequestBody } from '@/types';

import { footerStyle, headerStyle, layoutStyle } from './style';

const SigninPage: FC = () => {
  const setUserState = useSetUserState();
  const { push } = useHistory();

  const checkIsValueEmpty = useCallback(
    (option: {
        goBackSequence: number;
        nextSequence: number;
        errorMessage: string;
      }) =>
      (val: string) => {
        const { goBackSequence, nextSequence, errorMessage } = option;

        if (!val) return reject(goBackSequence, errorMessage);

        return resolve(nextSequence);
      },
    [],
  );

  const attemptLogin = useCallback(async (val, body: LoginRequestBody) => {
    if (val !== 'y') return reject(2, 'Access denied');

    try {
      await authApi.login(body);

      setUserState((prev) => ({ ...prev, userId: body.userId }));

      push(Uri.service);

      return resolve();
    } catch (error) {
      if (!error.response) return reject(1, NETWORK_ERROR);

      const { status } = error.response;
      if (loginError[status]) return reject(1, loginError[status]);

      return reject(1, UNEXPECTED_ERROR);
    }
  }, []);

  return (
    <div css={layoutStyle}>
      <header css={headerStyle}>
        <Link to={Uri.home}>
          <Logo onlyImg width="70px" />
          <Jumbotron title="Sign in" />
        </Link>
      </header>
      <main>
        <Shell width="789px" height="247px" legend="Telbby Service Shell">
          <Shell.Command
            render={renderProps('printLine', '', 'telbby init v0.1.0')}
          />
          <Shell.Command
            render={renderProps('readLine', 'question', 'username')}
            formKey="userId"
            maxLength={30}
            onEnter={checkIsValueEmpty({
              goBackSequence: 1,
              nextSequence: 2,
              errorMessage: 'Please enter your ID',
            })}
          />
          <Shell.Command
            formKey="password"
            maxLength={35}
            render={renderProps('readLine', 'question', 'password')}
            onEnter={checkIsValueEmpty({
              goBackSequence: 2,
              nextSequence: 3,
              errorMessage: 'Please enter your password',
            })}
          />
          <Shell.Command
            defaultValue="y"
            maxLength={1}
            render={renderProps('readLine', 'question', 'Sign in? [y/n]')}
            onEnter={attemptLogin}
          />
        </Shell>
      </main>
      <footer css={footerStyle}>
        <p>
          Don’t have an account?
          <Link to={Uri.signup}>Sign Up</Link>
        </p>
      </footer>
    </div>
  );
};

export default SigninPage;
