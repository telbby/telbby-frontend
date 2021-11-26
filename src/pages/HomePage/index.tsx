import React, { FC } from 'react';

import Shell from '@/components/Shell';
import Jumbotron from '@/components/common/Jumbotron';
import IntroWithClientUI from '@/components/intro/IntroWithClientUI';
import IntroWithFeedbacks from '@/components/intro/IntroWithFeedbackSystem';
import InduceSignup from '@/components/intro/InduceSignup';
import Layout from '@/components/common/Layout';

const HomePage: FC = () => {
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
      <Jumbotron
        title="Talk"
        descList={[
          'Thinking about project feedback?',
          'Here telbby will listen.',
        ]}
      />
      <Shell
        type="services"
        requestWhenQuestionDone={requestWhenQuestionDone}
        width={789}
        height={208}
      />
      <IntroWithClientUI />
      <IntroWithFeedbacks />
      <InduceSignup />
    </Layout>
  );
};

export default HomePage;
