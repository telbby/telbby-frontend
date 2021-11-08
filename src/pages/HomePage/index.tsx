import React, { FC } from 'react';

import Navigation from '@/components/Navigation';
import Shell from '@/components/Shell';

import { titleStyle } from './style';

const HomePage: FC = () => (
  <div>
    <Navigation />
    <h1 css={titleStyle}>Talk to telbby</h1>
    <Shell type="login" subTitle="service settings" />
  </div>
);

export default HomePage;
