import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import { render, screen } from '@testing-library/react';

import Layout from '.';

it('Layout component should render children under the main element', () => {
  render(
    <MemoryRouter>
      <Layout>Layout Test</Layout>
    </MemoryRouter>,
  );
  expect(screen.getByRole('main')).toHaveTextContent('Layout Test');
});
