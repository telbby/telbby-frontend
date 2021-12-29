import React from 'react';

import { render, screen } from '@testing-library/react';

import ShellPrintLine from '.';

describe('ShellPrintLine Component 테스트', () => {
  it('원하는 메시지를 렌더링할 수 있어야 합니다.', () => {
    const testMessage = '이런 메시지를 렌더링할 수 있어야 해요';

    render(<ShellPrintLine prefix="" message={testMessage} />);

    expect(screen.getByText(testMessage)).toBeInTheDocument();
  });

  it('prefix 가 `error` 가 아닌 경우 maxLength 가 0인 <input> 태그가 있어야 합니다.', () => {
    render(<ShellPrintLine prefix="" message="" />);

    expect(screen.getByRole('textbox')).toHaveAttribute('maxLength', '0');
  });

  it('prefix 가 `error` 인 경우 `ERROR:` 접두어와 함께 에러 메시지를 출력합니다.', () => {
    const errorMessage = '에러 메시지 입니다!!!';

    const { container } = render(
      <ShellPrintLine prefix="error" message={errorMessage} />,
    );

    expect(container).toHaveTextContent(`ERROR: ${errorMessage}`);
  });

  it('prefix 가 `error` 인 경우 <input> 태그가 없어야 합니다.', () => {
    render(<ShellPrintLine prefix="error" message="" />);

    expect(screen.queryByRole('textbox')).not.toBeInTheDocument();
  });
});
