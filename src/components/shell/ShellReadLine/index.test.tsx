import React from 'react';

import { render, screen } from '@testing-library/react';

import ShellReadLine from '.';

describe('ShellReadLIne Component 테스트', () => {
  it('원하는 prefix 를 렌더링할 수 있어야 합니다.', () => {
    const testPrefix = '테스트 prefix';

    render(<ShellReadLine prefix={testPrefix} message="" />);

    expect(screen.getByText(testPrefix)).toBeInTheDocument();
  });

  it('원하는 메시지를 렌더링할 수 있어야 합니다.', () => {
    const testMessage = '테스트 message';

    render(<ShellReadLine prefix="" message={testMessage} />);

    expect(screen.getByText(testMessage)).toBeInTheDocument();
  });

  it('message 가 "password" 가 아닐 경우, <input type="text"> 가 존재해야 합니다.', () => {
    render(<ShellReadLine prefix="" message="" />);

    expect(screen.getByRole('textbox')).toHaveAttribute('type', 'text');
  });

  it('message 가 `password` 일 경우, <input type="password"> 가 존재해야 합니다.', () => {
    render(<ShellReadLine prefix="" message="password" />);

    expect(screen.getByRole('password')).toHaveAttribute('type', 'password');
  });

  it('maxLength prop 이 있는 경우, input 태그에 해당 길이의 maxLength attribute 를 가져야 합니다.', () => {
    const testMaxLength = 20;

    render(<ShellReadLine prefix="" message="" maxLength={testMaxLength} />);

    expect(screen.getByRole('textbox')).toHaveAttribute(
      'maxLength',
      testMaxLength.toString(),
    );
  });
});
