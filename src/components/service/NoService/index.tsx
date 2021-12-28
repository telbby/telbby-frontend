import React, { FC } from 'react';

import emptyImg from '@/assets/images/empty.png';

import { emptyStyle } from './style';

const NoService: FC = () => {
  return (
    <div css={emptyStyle}>
      <img src={emptyImg} alt="empty" />
      <p>There are no services</p>
    </div>
  );
};

export default NoService;
