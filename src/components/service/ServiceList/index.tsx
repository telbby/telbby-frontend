import React, { FC } from 'react';

import { columnCenterStyle } from '@/styles';

import ServiceItem from '../ServiceItem';
import { headerStyle, wrapperStyle } from './style';

const dummy = [
  {
    id: 1,
    name: 'telbby',
    clientId: '12345678901234567890',
    domain: 'telbby.com',
  },
  {
    id: 2,
    name: 'Kakao',
    clientId: '12345678901234567891',
    domain: 'kakao.com',
  },
  {
    id: 3,
    name: 'test',
    clientId: '3wsqizhkpebg7kg6p08y',
    domain: null,
  },
  {
    id: 7,
    name: 'Naver',
    clientId: 'teneqm97egqn853o4wpo',
    domain: 'naver.com',
  },
  {
    id: 9,
    name: 'test',
    clientId: '5gmtkr9sekvjjovltgpl',
    domain: 'test.com',
  },
];

const ServiceList: FC = () => {
  return (
    <section css={wrapperStyle}>
      <h2 css={headerStyle}>Services</h2>
      <div css={columnCenterStyle}>
        {dummy.map((service) => {
          return (
            <ServiceItem
              key={service.id}
              name={service.name}
              domain={service.domain || ''}
              clientId={service.clientId}
            />
          );
        })}
      </div>
    </section>
  );
};

export default ServiceList;
