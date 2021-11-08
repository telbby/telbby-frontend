import React, { FC } from 'react';

import Shell from '@/components/Shell';
import Jumbotron from '@/components/common/Jumbotron';
import Layout from '@/components/common/Layout';

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
      <Shell type="login" />
    </Layout>
  );
};

export default HomePage;
