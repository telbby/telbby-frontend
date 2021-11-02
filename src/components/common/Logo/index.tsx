import React, { FC } from 'react';

import LogoImg from '@/assets/images/logo.png';
import { logoStyle } from './style';

type LogoProps = {
  onlyImg?: boolean;
  width?: string;
};

const Logo: FC<LogoProps> = ({ onlyImg, width }) => {
  return (
    <div css={logoStyle}>
      <img src={LogoImg} alt="logo" width={width} />
      {!onlyImg && <span>telbby</span>}
    </div>
  );
};

Logo.defaultProps = {
  onlyImg: false,
  width: '32px',
};

export default Logo;
