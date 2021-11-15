import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import { render, screen } from '@testing-library/react';
import { SHELL_FIRST_LINE_PREFIX } from '@/constants/shell';

import SigninPage from '.';

describe('SigninPage 테스트', () => {
  const signupPageContainer = (
    <MemoryRouter>
      <SigninPage />
    </MemoryRouter>
  );

  it(`Logo와 Jumbotron을 렌더링 해야 합니다.`, () => {
    render(signupPageContainer);
    expect(screen.getByRole('heading')).toHaveTextContent('Sign in to telbby');
    expect(screen.getByAltText('logo'));
  });

  it(`Shell Component가 렌더링 되어야 합니다.`, () => {
    render(signupPageContainer);
    expect(
      screen.queryByLabelText(`${SHELL_FIRST_LINE_PREFIX} - signin`),
    ).toBeInTheDocument();
  });

  it(`footer에 안내문과 함께 /signin으로 보내는 링크가 있어야 합니다.`, () => {
    render(signupPageContainer);
    expect(screen.queryByText('Don’t have an account?')).toBeInTheDocument();
    expect(screen.getByRole('link')).toHaveAttribute('href', '/signin');
  });
});
