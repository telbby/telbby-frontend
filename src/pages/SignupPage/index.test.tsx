import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import { render, screen } from '@testing-library/react';

import SignupPage from '.';

describe('SignupPage 테스트', () => {
  const signupPageContainer = (
    <MemoryRouter>
      <SignupPage />
    </MemoryRouter>
  );

  it(`회원가입 유도 문구를 렌더링해야 합니다.`, () => {
    render(signupPageContainer);
    expect(screen.getByRole('heading')).toHaveTextContent('Join to telbby');
  });

  it(`로고를 렌더링해야 합니다.`, () => {
    render(signupPageContainer);
    expect(screen.getByAltText('logo'));
  });

  // FIXME: #23 이 머지된 이후 테스트 케이스를 수정해야 합니다.
  //    - href 속성 체크 => 실제로 이동이 되는지 테스트
  it(`footer에 안내문과 함께 /signin으로 보내는 링크가 있어야 합니다.`, () => {
    render(signupPageContainer);
    expect(screen.queryByText('Already have an account?')).toBeInTheDocument();
    expect(screen.getByRole('link')).toHaveAttribute('href', '/signin');
  });
});
