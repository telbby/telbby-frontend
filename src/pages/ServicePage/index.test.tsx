import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

import { render, screen } from '@testing-library/react';

import ServicePage from '.';

describe('ServicePage 테스트', () => {
  it('ServicePage 렌더링 테스트', () => {
    render(
      <RecoilRoot>
        <MemoryRouter>
          <ServicePage />
        </MemoryRouter>
      </RecoilRoot>,
    );

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'Add to telbby',
    );
  });
});
