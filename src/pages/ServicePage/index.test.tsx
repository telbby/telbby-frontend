import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import { render, screen } from '@testing-library/react';

import ServicePage from '.';

it('should render ServicePage contents', () => {
  render(
    <MemoryRouter>
      <ServicePage />
    </MemoryRouter>,
  );

  expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
    'Add to telbby',
  );
  expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(
    'Services',
  );
});
