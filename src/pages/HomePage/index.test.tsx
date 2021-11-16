import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import { render, screen } from '@testing-library/react';

import HomePage from '.';

it('should render proper Jumbotron', () => {
  render(
    <MemoryRouter>
      <HomePage />
    </MemoryRouter>,
  );
  expect(screen.getByRole('heading')).toHaveTextContent('Talk to telbby');
  expect(
    screen.queryByText('Thinking about project feedback?'),
  ).toBeInTheDocument();
  expect(screen.queryByText('Here telbby will listen.')).toBeInTheDocument();
});
