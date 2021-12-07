// TODO: 해당 페이지는 `Save Without Formatting` 으로 저장된 상태입니다.
// 그대로 저장하면 `한 줄 내 최대 글자 수` 규칙에 의해 줄이 변경됩니다.
// 더 나은 방법을 고민중입니다.
/* eslint-disable prettier/prettier */
import React, { FC } from 'react';
import { useHistory } from 'react-router-dom';

import { authApi } from '@/apis';
import Shell from '@/components/shell/ShellCopy';
import Jumbotron from '@/components/common/Jumbotron';
import Logo from '@/components/common/Logo';
import { NETWORK_ERROR, UNEXPECTED_ERROR, loginError } from '@/constants/error';
import Uri from '@/constants/uri';
import useShellScript from '@/hooks/useShellScript';
import { LoginRequestBody } from '@/types';
import { PrintLineCommand } from '@/types/shell';

import { footerStyle, headerStyle, layoutStyle } from './style';

const SigninPage: FC = () => {
  const { push } = useHistory();

  const [
    signupScript,
    addPrintLineCommand,
    addReadLineCommand,
    createPrintLineCommand,
  ] = useShellScript();

  const checkUserName = async (val: string) => {
    if (val.length) return { status: 'success', nextSequence: 2 } as const;

    const errorLine = createPrintLineCommand(1, 'error', 'Please enter your ID');
    return { status: 'error', ...errorLine } as const;
  };

  const checkPassword = async (val: string) => {
    if (val.length) return { status: 'success', nextSequence: 3 } as const;

    const errorLine = createPrintLineCommand(2, 'error', 'Please enter your Password');
    return { status: 'error', ...errorLine } as const;
  };

  const checkSigninForm = async (
    val: string,
    body: LoginRequestBody,
  ): Promise<
    | {
        status: 'success';
        nextSequence: number | null;
      }
    | ({
        status: 'error';
      } & PrintLineCommand)
  > => {
    if (val !== 'y') {
      const errorLine = createPrintLineCommand(1, 'error', `Access denied for user ${body.userId}`);
      return { status: 'error', ...errorLine } as const;
    }

    try {
      await authApi.login(body);
      push(Uri.service);
    } catch (error) {
      if (!error.response) {
        const errorLine = createPrintLineCommand(1, 'error', NETWORK_ERROR);
        return { status: 'error', ...errorLine } as const;
      }

      const { status } = error.response;
      if (loginError[status]) {
        const errorLine = createPrintLineCommand(1, 'error', loginError[status]);
        return { status: 'error', ...errorLine } as const;
      }

      const errorLine = createPrintLineCommand(1, 'error', UNEXPECTED_ERROR);
      return { status: 'error', ...errorLine } as const;
    }

    return { status: 'success', nextSequence: null };
  };

  addPrintLineCommand(0, 1, '', 'telbby init v0.1.0');
  addReadLineCommand(1, 'question','username', checkUserName, null, 'userId', 30);
  addReadLineCommand(2, 'question', 'password', checkPassword, null, 'password', 35);
  addReadLineCommand(3, 'question', 'Sign in? [y/n]', checkSigninForm, 'y', null, 1);

  return (
    <div css={layoutStyle}>
      <header css={headerStyle}>
        <Logo onlyImg width="70px" />
        <Jumbotron title="Sign in" />
      </header>
      <main>
        <Shell script={signupScript} width="789px" height="247px" />
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

// const signupScript: ScriptCommand[] = [
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
//     enterHandler: async (val) => {
//       if (!val.length) {
//         return {
//           status: 'error',
//           type: 'printLine',
//           prefix: 'error',
//           message: 'Please enter your ID',
//           nextSequence: 1,
//         };
//       }
//       return { status: 'success', nextSequence: 2 };
//     },
//     formKey: 'userId',
//     maxLength: 30,
//   },
//   {
//     type: 'readLine',
//     prefix: 'question',
//     message: 'password',
//     sequence: 2,
//     enterHandler: async (val) => {
//       if (!val.length) {
//         return {
//           status: 'error',
//           type: 'printLine',
//           prefix: 'error',
//           message: 'Please enter your Password',
//           nextSequence: 2,
//         };
//       }
//       return { status: 'success', nextSequence: 3 };
//     },
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
