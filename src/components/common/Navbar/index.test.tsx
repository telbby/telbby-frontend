import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import { render, screen } from '@testing-library/react';

import { RecoilRoot } from 'recoil';
import Navbar from '.';
import Uri from '@/constants/uri';

it('should have link to home page when click logo', () => {
  render(
    <RecoilRoot>
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    </RecoilRoot>,
  );
  const linkDom = screen.getByRole('link', { name: 'logo telbby' });
  expect(linkDom).toHaveAttribute('href', Uri.home);
});

it('should have link to sign in page when click Sign in button', () => {
  render(
    <RecoilRoot>
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    </RecoilRoot>,
  );
  const linkDom = screen.getByRole('link', { name: 'Sign in' });
  expect(linkDom).toHaveAttribute('href', Uri.signin);
});

it('should have link to sign up page when click Register button', () => {
  render(
    <RecoilRoot>
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    </RecoilRoot>,
  );
  const linkDom = screen.getByRole('link', { name: 'Register' });
  expect(linkDom).toHaveAttribute('href', Uri.signup);
});
