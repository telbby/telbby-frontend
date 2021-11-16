import React from 'react';

import { render, screen } from '@testing-library/react';

import Overlay from '.';

describe('<Overlay/> component test', () => {
  it('children을 렌더링해야 합니다.', () => {
    const childrenContent = 'Children';
    render(
      <Overlay>
        <div>{childrenContent}</div>
      </Overlay>,
    );
    expect(screen.queryByText(childrenContent)).toBeInTheDocument();
  });
});
