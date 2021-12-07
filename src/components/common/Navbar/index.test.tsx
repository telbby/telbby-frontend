import React from 'react';
import { Router } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { createMemoryHistory } from 'history';

import { render, screen, fireEvent } from '@testing-library/react';

import Navbar from '.';

describe('<Navbar/> component test', () => {
  describe('로그인이 되지 않았을 경우', () => {
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

  describe('로그인이 되었을 경우', () => {
    // @TODO 로그인이 되었을 경우에 대한 테스트 케이스를 추가해야 합니다.
    // NavBar 내에서 Recoil 전역 상태를 사용하고 있어서 어떻게 테스트 케이스를 작성해야 할지 모르겠네요... ㅠㅠ
  });
});
