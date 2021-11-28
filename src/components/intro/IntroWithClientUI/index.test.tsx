import React from 'react';

import { render, screen } from '@testing-library/react';

import IntroWithClientUI from '.';

describe('<IntroWithClientUI/> component test', () => {
  it('서비스 소개 제목을 렌더링해야 합니다.', () => {
    const titleList = ['To Get', 'User Feedback Easily'];
    const titleContent = titleList.reduce((acc, cur) => acc + cur, '');

    render(<IntroWithClientUI />);

    expect(screen.queryByRole('heading', { level: 2 })).toHaveTextContent(
      titleContent,
    );
  });

  it('서비스 소개 내용을 렌더링해야 합니다.', () => {
    const desc =
      'With Telbby, you can easily build a user feedback system for any project.';

    render(<IntroWithClientUI />);

    expect(screen.queryByText(desc)).toBeInTheDocument();
  });

  it('Client UI 이미지를 렌더링해야 합니다.', () => {
    render(<IntroWithClientUI />);

    expect(screen.getByRole('img')).toHaveAttribute('alt', 'client ui');
  });
});
