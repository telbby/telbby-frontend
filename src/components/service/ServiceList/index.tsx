import React, { FC } from 'react';

import { columnCenterStyle } from '@/styles';

import ServiceItem from '../ServiceItem';
import { headerStyle, wrapperStyle } from './style';

const ServiceList: FC = () => {
  return (
    <section css={wrapperStyle}>
      <h2 css={headerStyle}>Services</h2>
      <div css={columnCenterStyle}>
        {['a', 'b'].map((item) => {
          return <ServiceItem key={item} />;
        })}
      </div>
    </section>
  );
};

export default ServiceList;
