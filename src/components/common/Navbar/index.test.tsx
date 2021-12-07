import React from 'react';
import { Router } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { createMemoryHistory } from 'history';

import { render, screen, fireEvent } from '@testing-library/react';

import Navbar from '.';

describe('<Navbar/> component test', () => {
  it('Logo를 클릭했을 때 홈으로 이동해야 합니다.', () => {
    const history = createMemoryHistory();
    history.replace('/other');

    render(
      <RecoilRoot>
        <Router history={history}>
          <Navbar />
        </Router>
      </RecoilRoot>,
    );

    const linkDom = screen.getByRole('link', { name: 'logo telbby' });
    fireEvent.click(linkDom);

    expect(history.location.pathname).toBe('/');
  });

  it('sign in 링크를 클릭했을 때 sign in 페이지로 이동해야 합니다.', () => {
    const history = createMemoryHistory();
    history.replace('/other');

    render(
      <RecoilRoot>
        <Router history={history}>
          <Navbar />
        </Router>
      </RecoilRoot>,
    );

    const linkDom = screen.getByRole('link', { name: 'Sign in' });
    fireEvent.click(linkDom);

    expect(history.location.pathname).toBe('/signin');
  });

  it('register 링크를 클릭했을 때 sign up 페이지로 이동해야 합니다.', () => {
    const history = createMemoryHistory();
    history.replace('/other');

    render(
      <RecoilRoot>
        <Router history={history}>
          <Navbar />
        </Router>
      </RecoilRoot>,
    );

    const linkDom = screen.getByRole('link', { name: 'Register' });
    fireEvent.click(linkDom);

    expect(history.location.pathname).toBe('/signup');
  });
});
