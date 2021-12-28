import React from 'react';
import { RecoilRoot } from 'recoil';

import { render, screen } from '@testing-library/react';

import ServiceItem from '.';

describe('<ServiceItem/> component test', () => {
  const id = 1;
  const name = 'serviceName';
  const domain = 'serviceDomain';
  const clientId = 'serviceClientId';

  it('서비스 아이템 정보 및 삭제 아이콘을 렌더링해야 합니다.', () => {
    render(
      <RecoilRoot>
        <ServiceItem
          id={id}
          name={name}
          domain={domain}
          clientId={clientId}
          onDeleteServiceItem={() => {}}
        />
      </RecoilRoot>,
    );

    expect(screen.queryByRole('heading', { level: 3 })).toHaveTextContent(name);
    expect(screen.queryByText(domain)).toBeInTheDocument();
    expect(screen.queryByText(`Client ID : ${clientId}`)).toBeInTheDocument();

    expect(screen.getByRole('img', { name: 'remove' })).toBeInTheDocument();
  });
});
