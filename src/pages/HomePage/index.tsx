import React, { FC } from 'react';

import Navigation from '@/components/Navigation';

import { titleStyle } from './style';

const HomePage: FC = () => {
  return (
    <div>
      <Navigation />
      <h1 css={titleStyle}>Talk to telbby</h1>
    </div>
  );
};

export default HomePage;
