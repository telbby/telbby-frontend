import React from 'react';

import { render, screen } from '@testing-library/react';

import ServiceList from '.';

describe('<ServiceList/> component test', () => {
  it('serviceList를 알맞게 전달받았다면 서비스 아이템 목록을 렌더링합니다.', () => {
    const name = 'serviceName';
    const domain = 'serviceDomain';
    const clientId = 'serviceClientId';
    const serviceList = [{ id: 1, name, domain, clientId }];
    const serviceCount = 1;

    render(
      <ServiceList
        serviceCount={serviceCount}
        serviceList={serviceList}
        onDeleteServiceItem={() => {}}
      />,
    );

    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(
      `Services ${serviceCount}`,
    );
    expect(screen.queryByRole('heading', { level: 3 })).toHaveTextContent(name);
    expect(screen.queryByText(domain)).toBeInTheDocument();
    expect(screen.queryByText(`Client ID : ${clientId}`)).toBeInTheDocument();
  });

  it('serviceList가 빈 배열이면 서비스가 없다는 화면을 렌더링합니다.', () => {
    render(
      <ServiceList
        serviceCount={0}
        serviceList={[]}
        onDeleteServiceItem={() => {}}
      />,
    );

    expect(screen.getByRole('img', { name: 'empty' })).toBeInTheDocument();
    expect(screen.queryByText('There are no services')).toBeInTheDocument();
  });
});
