import React, { FC } from 'react';

import Shell from '@/components/Shell';
import Jumbotron from '@/components/common/Jumbotron';
import Layout from '@/components/common/Layout';

import { servicePageStyle } from './style';

const ServicePage: FC = () => {
  /**
   * FIXME:
   * 가상 API 요청을 위해 만든 코드입니다.
   * 추후 API 연동을 할 때 지워주면 됩니다.
   */
  const requestWhenQuestionDone = async () =>
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
        <Jumbotron title="Add" />
        <Shell
          type="services"
          requestWhenQuestionDone={requestWhenQuestionDone}
          width="90%"
          height="200px"
        />
      </div>
    </Layout>
  );
};

export default ServicePage;
