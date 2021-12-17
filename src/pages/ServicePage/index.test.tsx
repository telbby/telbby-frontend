import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

import { render, screen } from '@testing-library/react';

import ServicePage from '.';

it('should render ServicePage contents', () => {
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
  // TODO: API 연동 관련 테스트 코드 작성하면서 수정
  // expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(
  //   'Services',
  // );
});
