import React, { FC } from 'react';

import Navbar from '../Navbar';
import Footer from '../Footer';

import { layoutStyle } from './style';

const Layout: FC = ({ children }) => {
  return (
    <div css={layoutStyle}>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
