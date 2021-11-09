import React, { FC } from 'react';

import Shell from '@/components/Shell';
import Jumbotron from '@/components/common/Jumbotron';
import Layout from '@/components/common/Layout';

const HomePage: FC = () => {
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
      />
    </Layout>
  );
};

export default HomePage;
