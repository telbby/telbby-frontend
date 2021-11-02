import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import Layout from '@/components/common/Layout';
import Title from '@/components/common/Title';
import notFoundImg from '@/assets/images/page-not-found.png';
import Uri from '@/constants/uri';

import { notFoundPageStyle } from './style';

const NotFoundPage: FC = () => {
  return (
    <Layout>
      <div css={notFoundPageStyle}>
        <Link to={Uri.home}>
          <Title text="Back" />
        </Link>
        <img src={notFoundImg} alt="page-not-found" />
        <p>There are no resources</p>
      </div>
    </Layout>
  );
};

export default NotFoundPage;
