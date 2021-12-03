import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import notFoundImg from '@/assets/images/page-not-found.png';
import Jumbotron from '@/components/common/Jumbotron';
import Layout from '@/components/common/Layout';
import Uri from '@/constants/uri';

import { linkStyle, notFoundPageStyle } from './style';

const NotFoundPage: FC = () => {
  return (
    <Layout>
      <div css={notFoundPageStyle}>
        <Link to={Uri.home} css={linkStyle}>
          <Jumbotron title="Back" />
        </Link>
        <img src={notFoundImg} alt="page-not-found" />
        <p>There are no resources</p>
      </div>
    </Layout>
  );
};

export default NotFoundPage;
