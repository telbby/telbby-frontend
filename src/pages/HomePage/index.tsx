import React, { FC } from 'react';

import Navigation from '@/components/Navigation';
import Shell from '@/components/Shell';

import { titleStyle } from './style';

const HomePage: FC = () => {
  const formElement = [
    { lineType: 'question', lineTitle: 'username' },
    { lineType: 'question', lineTitle: 'password', inputType: 'password' },
    {
      lineType: 'question',
      lineTitle: 'Sign in? [y/n]',
      checkValidation: (val: string) => {
        if (!['y', 'n'].includes(val)) return false;
        return true;
      },
    },
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
