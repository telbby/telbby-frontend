import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import { render } from '@testing-library/react';

import App from './App';

it(`App rendering test`, () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>,
  );
});
