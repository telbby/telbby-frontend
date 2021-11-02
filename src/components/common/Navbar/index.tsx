import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import Logo from '@/components/Logo';
import Uri from '@/constants/uri';

import { navStyle, yellowLineButton, yellowFullButton } from './style';

const Navbar: FC = () => {
  return (
    <nav css={navStyle}>
      <Link to={Uri.home}>
        <Logo />
      </Link>
      <div>
        <Link to={Uri.signin}>
          <button css={yellowLineButton} type="button">
            Sign in
          </button>
        </Link>
        <Link to={Uri.signup}>
          <button css={yellowFullButton} type="button">
            Register
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
