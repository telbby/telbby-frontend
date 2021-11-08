import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import { render, screen } from '@testing-library/react';

import NotFoundPage from '.';

it('should render proper Jumbotron', () => {
  render(
    <MemoryRouter>
      <NotFoundPage />
    </MemoryRouter>,
  );
  expect(screen.getByRole('heading')).toHaveTextContent('Back to telbby');
});

it('should render NotFoundPage contents', () => {
  render(
    <MemoryRouter>
      <NotFoundPage />
    </MemoryRouter>,
  );
  expect(
    screen.getByRole('img', { name: 'page-not-found' }),
  ).toBeInTheDocument();
  expect(screen.queryByText('There are no resources')).toBeInTheDocument();
});
