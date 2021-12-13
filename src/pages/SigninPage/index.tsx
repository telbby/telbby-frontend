import React, { FC } from 'react';
import { useHistory } from 'react-router-dom';

import { authApi } from '@/apis';
import Jumbotron from '@/components/common/Jumbotron';
import Logo from '@/components/common/Logo';
import ShellCommand from '@/components/shell/ShellCommand';
import Shell from '@/components/shell/ShellCopy';
import { renderProps } from '@/components/shell/utils';
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
              if (!val.length) {
                return {
                  status: 'error',
                  nextSequence: 1,
                  render: renderProps(
                    'printLine',
                    'error',
                    'Please enter your ID',
                  ),
                };
              }
              return { status: 'success', nextSequence: 2 };
            }}
          />
          <ShellCommand
            sequence={2}
            nextSequence={3}
            formKey="password"
            maxLength={35}
            render={renderProps('readLine', 'question', 'password')}
            onEnter={async (val) => {
              if (!val.length) {
                return {
                  status: 'error',
                  nextSequence: 2,
                  render: renderProps(
                    'printLine',
                    'error',
                    'Please enter your Password',
                  ),
                };
              }
              return { status: 'success', nextSequence: 3 };
            }}
          />
          <ShellCommand
            sequence={3}
            nextSequence={4}
            defaultValue="y"
            maxLength={1}
            render={renderProps('readLine', 'question', 'Sign in? [y/n]')}
            onEnter={async (val, body: LoginRequestBody) => {
              if (val !== 'y') {
                return {
                  status: 'error',
                  nextSequence: 1,
                  render: renderProps('printLine', 'error', 'Access denied'),
                };
              }

              try {
                await authApi.login(body);
                push(Uri.service);
                return { status: 'success', nextSequence: 4 };
              } catch (error) {
                if (!error.response) {
                  return {
                    status: 'error',
                    nextSequence: 1,
                    render: renderProps('printLine', 'error', NETWORK_ERROR),
                  };
                }

                const { status } = error.response;
                if (loginError[status]) {
                  return {
                    status: 'error',
                    nextSequence: 1,
                    render: renderProps(
                      'printLine',
                      'error',
                      loginError[status],
                    ),
                  };
                }

                return {
                  status: 'error',
                  nextSequence: 1,
                  render: renderProps('printLine', 'error', UNEXPECTED_ERROR),
                };
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

// const signinScript: ScriptCommand[] = [
//   {
//     sequence: 0,
//     nextSequence: 1,
//     prefix: '',
//     message: 'telbby init v0.1.0',
//     type: 'printLine',
//   },
//   {
//     type: 'readLine',
//     prefix: 'question',
//     message: 'username',
//     sequence: 1,
// enterHandler: async (val) => {
//   if (!val.length) {
//     return {
//       status: 'error',
//       type: 'printLine',
//       prefix: 'error',
//       message: 'Please enter your ID',
//       nextSequence: 1,
//     };
//   }
//   return { status: 'success', nextSequence: 2 };
// },
//     formKey: 'userId',
//     maxLength: 30,
//   },
//   {
//     type: 'readLine',
//     prefix: 'question',
//     message: 'password',
//     sequence: 2,
// enterHandler: async (val) => {
//   if (!val.length) {
//     return {
//       status: 'error',
//       type: 'printLine',
//       prefix: 'error',
//       message: 'Please enter your Password',
//       nextSequence: 2,
//     };
//   }
//   return { status: 'success', nextSequence: 3 };
// },
//     formKey: 'password',
//     maxLength: 35,
//   },
//   {
//     type: 'readLine',
//     prefix: 'question',
//     message: 'Sign in? [y/n]',
//     sequence: 3,
//     enterHandler: async (val, body: LoginRequestBody) => {
//       if (val !== 'y') {
//         return {
//           status: 'error',
//           type: 'printLine',
//           prefix: 'error',
//           message: 'Access denied',
//           nextSequence: 1,
//         };
//       }

//       try {
//         await authApi.login(body);
//         push(Uri.service);
//         return { status: 'success', nextSequence: 4 };
//       } catch (error) {
//         if (!error.response) {
//           return {
//             status: 'error',
//             type: 'printLine',
//             prefix: 'error',
//             message: NETWORK_ERROR,
//             nextSequence: 1,
//           };
//         }

//         const { status } = error.response;
//         if (loginError[status]) {
//           return {
//             status: 'error',
//             type: 'printLine',
//             prefix: 'error',
//             message: loginError[status],
//             nextSequence: 1,
//           };
//         }

//         return {
//           status: 'error',
//           type: 'printLine',
//           prefix: 'error',
//           message: UNEXPECTED_ERROR,
//           nextSequence: 1,
//         };
//       }
//     },
//     defaultValue: 'y',
//     maxLength: 1,
//   },
// ];
