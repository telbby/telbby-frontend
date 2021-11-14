import React from 'react';

import { render, screen } from '@testing-library/react';
import {
  SHELL_ERROR_USER_ACCESS_DENIED,
  SHELL_SUCCESS_MESSAGE,
} from '@/constants/shell';

import ShellLine, { ShellLineProps, ShellLineType } from './index';

describe('ShellLine Component', () => {
  it(`question, config 타입의 ShellLine은 content를 렌더링합니다. input='text'도 함께 출력합니다.`, () => {
    const props: ShellLineProps = {
      type: ShellLineType.Config,
      content: 'username',
    };

    const { container } = render(
      <ShellLine type={props.type} content={props.content} />,
    );

    expect(container).toHaveTextContent('config username:');
    expect(screen.getByRole('textbox')).toHaveAttribute('type', 'text');
  });
  it(`content가 password일 경우, <input type='password'/> 를 렌더링합니다.`, () => {
    const props: ShellLineProps = {
      type: ShellLineType.Question,
      content: 'password',
    };

    const { container } = render(
      <ShellLine type={props.type} content={props.content} />,
    );

    expect(container).toHaveTextContent('question password:');
    expect(screen.getByAltText('input')).toHaveAttribute('type', 'password');
  });
  it(`error type의 ShellLine은 error message를 출력합니다. input은 갖지 않습니다.`, () => {
    const props: ShellLineProps = {
      type: ShellLineType.Error,
      content: SHELL_ERROR_USER_ACCESS_DENIED,
    };

    const { container } = render(
      <ShellLine type={props.type} content={props.content} />,
    );

    expect(container).toHaveTextContent(
      `ERROR: ${SHELL_ERROR_USER_ACCESS_DENIED}`,
    );
    expect(screen.queryByRole('textbox')).not.toBeInTheDocument();
  });
  it(`default type의 ShellLine은 maxLength가 0인 input을 렌더링합니다.`, () => {
    const props: ShellLineProps = {
      type: ShellLineType.Default,
      content: SHELL_SUCCESS_MESSAGE,
    };

    const { container } = render(
      <ShellLine type={props.type} content={props.content} />,
    );

    expect(container).toHaveTextContent(`${SHELL_SUCCESS_MESSAGE}`);
    expect(screen.getByRole('textbox')).toHaveAttribute('maxLength', '0');
  });
});
