import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import notFoundImg from '@/assets/images/page-not-found.png';
import Jumbotron from '@/components/common/Jumbotron';
import Layout from '@/components/common/Layout';
import Uri from '@/constants/uri';

import { notFoundImageStyle, notFoundPageStyle } from './style';

const NotFoundPage: FC = () => {
  return (
    <Layout>
      <div css={notFoundPageStyle}>
        <Link to={Uri.home}>
          <Jumbotron title="Back" />
        </Link>
        <img src={notFoundImg} alt="page-not-found" css={notFoundImageStyle} />
        <p>There are no resources</p>
      </div>
    </Layout>
  );
};

export default NotFoundPage;
