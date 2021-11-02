import React, { FC } from 'react';

import Navigation from '@/components/Navigation';
import Shell from '@/components/Shell';
import { SHELL_LOGIN_FORM_ELEMENT } from '@/constants/shell';

import { titleStyle } from './style';

const HomePage: FC = () => (
  <div>
    <Navigation />
    <h1 css={titleStyle}>Talk to telbby</h1>
    <Shell formElement={SHELL_LOGIN_FORM_ELEMENT} subTitle="service settings" />
  </div>
);

export default HomePage;
