import React, { FC } from 'react';

import Layout from '@/components/common/Layout';
import Jumbotron from '@/components/common/Jumbotron';
import IntroWithClientUi from '@/components/intro/IntroWithClientUI';
import IntroWithFeedbacks from '@/components/intro/IntroWithFeedbackSystem';
import InduceSignup from '@/components/intro/InduceSignup';

const HomePage: FC = () => {
  return (
    <Layout>
      <Jumbotron
        title="Talk"
        descList={[
          'Thinking about project feedback?',
          'Here telbby will listen.',
        ]}
      />
      <IntroWithClientUi />
      <IntroWithFeedbacks />
      <InduceSignup />
    </Layout>
  );
};

export default HomePage;
