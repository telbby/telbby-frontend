import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { render, screen } from '@testing-library/react';

import HomePage from '.';

it('should render "Home"', () => {
  render(
    <BrowserRouter>
      <HomePage />
    </BrowserRouter>,
  );
  screen.getByText('Talk to telbby');
});
