import React, { FC } from 'react';

import Jumbotron from '@/components/common/Jumbotron';
import Layout from '@/components/common/Layout';

const HomePage: FC = () => (
  <Layout>
    <Jumbotron
      title="Talk"
      descList={[
        'Thinking about project feedback?',
        'Here telbby will listen.',
      ]}
    />
  </Layout>
);

export default HomePage;
