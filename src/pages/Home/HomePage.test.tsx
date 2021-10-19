import React from 'react';

import { render, screen } from '@testing-library/react';

import HomePage from './HomePage';

it('should render "Home"', () => {
  render(<HomePage />);
  screen.getByText('Home');
});
