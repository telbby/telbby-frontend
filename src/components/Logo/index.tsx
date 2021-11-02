import React, { FC } from 'react';

import LogoImg from '@/assets/images/logo.png';
import { logoStyle } from './style';

type LogoProps = {
  onlyImg?: boolean;
};

const Logo: FC<LogoProps> = ({ onlyImg }) => {
  return (
    <div css={logoStyle}>
      <img src={LogoImg} alt="logo" />
      {!onlyImg && <span>telbby</span>}
    </div>
  );
};

Logo.defaultProps = {
  onlyImg: false,
};

export default Logo;
