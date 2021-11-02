import React, { FC } from 'react';

import Layout from '@/components/common/Layout';

import { titleStyle } from './style';

const HomePage: FC = () => {
  return (
    <Layout>
      <h1 css={titleStyle}>Talk to telbby</h1>
    </Layout>
  );
};

export default HomePage;
