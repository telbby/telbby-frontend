import React, { FC } from 'react';

import Layout from '@/components/common/Layout';
import Jumbotron from '@/components/common/Jumbotron';

const HomePage: FC = () => {
  return (
    <Layout>
      <Jumbotron
        title="Talk"
        desc={['Thinking about project feedback?', 'Here telbby will listen.']}
      />
    </Layout>
  );
};

export default HomePage;
