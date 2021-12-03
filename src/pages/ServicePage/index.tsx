import React, { FC } from 'react';

import Shell from '@/components/Shell';
import Jumbotron from '@/components/common/Jumbotron';
import Layout from '@/components/common/Layout';
import ServiceList from '@/components/service/ServiceList';

import { dummy } from './dummyData';
import { jumbotronWrapperStyle, servicePageStyle } from './style';

const ServicePage: FC = () => {
  /**
   * FIXME:
   * 가상 API 요청을 위해 만든 코드입니다.
   * 추후 API 연동을 할 때 지워주면 됩니다.
   */
  const requestWhenQueryDone = async () =>
    new Promise((resolve, reject) => {
      setTimeout(
        // () => resolve('Success'),
        () => reject(new Error('Not valid domain. Telbby is great you know?')),
        1000,
      );
    });

  return (
    <Layout>
      <div css={servicePageStyle}>
        <div css={jumbotronWrapperStyle}>
          <Jumbotron title="Add" />
        </div>
        <Shell
          type="service"
          requestWhenQueryDone={requestWhenQueryDone}
          width="90%"
          height="200px"
        />
        <ServiceList serviceList={dummy} />
      </div>
    </Layout>
  );
};

export default ServicePage;
