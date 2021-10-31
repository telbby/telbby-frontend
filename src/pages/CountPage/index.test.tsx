import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

import { render, screen } from '@testing-library/react';

import CountPage from '.';

it('should render "Count"', () => {
  render(
    <BrowserRouter>
      <RecoilRoot>
        <CountPage />
      </RecoilRoot>
    </BrowserRouter>,
  );
  screen.getByText('Count');
});
