import React, { FC, useCallback } from 'react';
import { Link } from 'react-router-dom';

import { userApi } from '@/apis';
import Jumbotron from '@/components/common/Jumbotron';
import Logo from '@/components/common/Logo';
import Shell from '@/components/shell/Shell';
import { reject, renderProps, resolve } from '@/components/shell/helper';
import { NETWORK_ERROR, UNEXPECTED_ERROR } from '@/constants/error';
import Uri from '@/constants/uri';
import { LoginRequestBody } from '@/types';

import { footerStyle, headerStyle, layoutStyle } from './style';

const SignupPage: FC = () => {
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

  const attemptSignup = useCallback(async (val, body: LoginRequestBody) => {
    if (val !== 'y') return reject(2, 'Access denied');

    try {
      await userApi.signup(body);

      return resolve(4);
    } catch (error) {
      if (!error.response) return reject(1, NETWORK_ERROR);

      const { message } = error.response.data;
      if (message) return reject(1, message);

      return reject(1, UNEXPECTED_ERROR);
    }
  }, []);

  return (
    <div css={layoutStyle}>
      <header css={headerStyle}>
        <Link to={Uri.home}>
          <Logo onlyImg width="70px" />
          <Jumbotron title="Join" />
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
            render={renderProps(
              'readLine',
              'question',
              'Would you like to join? [y/n]',
            )}
            onEnter={attemptSignup}
          />
          <Shell.Command
            render={renderProps(
              'printLine',
              '',
              'Welcome to join telbby!! Please sign in and enjoy our services.',
            )}
          />
        </Shell>
      </main>
      <footer css={footerStyle}>
        <p>
          Already have an account? <Link to={Uri.signin}>Sign In</Link>
        </p>
      </footer>
    </div>
  );
};

export default SignupPage;
