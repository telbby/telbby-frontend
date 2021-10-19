import React from 'react';
import { render, screen } from '@testing-library/react';

import CountPage from './CountPage';

it('should render "Count"', () => {
  render(<CountPage />);
  screen.getByText('Count');
});
