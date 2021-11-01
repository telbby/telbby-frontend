import React, { FC } from 'react';

import Navigation from '@/components/Navigation';
import Shell from '@/components/Shell';

import { titleStyle } from './style';

const HomePage: FC = () => {
  const formElement = [
    { type: 'question', title: 'username' },
    { type: 'question', title: 'password' },
    { type: 'question', title: 'sign in' },
  ];

  return (
    <div>
      <Navigation />
      <h1 css={titleStyle}>Talk to telbby</h1>
      <Shell formElement={formElement} />
    </div>
  );
};

export default HomePage;
