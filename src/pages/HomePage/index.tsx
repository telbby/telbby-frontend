import React, { FC } from 'react';

import IntroWithClientUI from '@/components/intro/IntroWithClientUI';
import IntroWithFeedbacks from '@/components/intro/IntroWithFeedbackSystem';
import InduceSignup from '@/components/intro/InduceSignup';
import Layout from '@/components/common/Layout';
import IntroMain from '@/components/intro/IntroMain';

const HomePage: FC = () => {
  return (
    <Layout>
      <IntroMain />
      <IntroWithClientUI />
      <IntroWithFeedbacks />
      <InduceSignup />
    </Layout>
  );
};

export default HomePage;
