import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import Logo from '../Logo';
import Uri from '@/constants/uri';
import { useUserState } from '@/atoms/userState';

import {
  navStyle,
  yellowLineButtonStyle,
  yellowFullButtonStyle,
} from './style';
import useConfirmModal from '@/hooks/useConfirmModal';

const Navbar: FC = () => {
  const [user, setUser] = useUserState();
  const [open] = useConfirmModal();

  const onLogout = () => {
    const logout = () => setUser(null);
    open({ message: 'Do you want to logout?', acceptHandler: logout });
  };

  return (
    <nav css={navStyle}>
      <Link to={Uri.home}>
        <Logo />
      </Link>

      <div>
        {!user ? (
          <>
            <Link to={Uri.signin}>
              <span css={yellowLineButtonStyle}>Sign in</span>
            </Link>
            <Link to={Uri.signup}>
              <span css={yellowFullButtonStyle}>Register</span>
            </Link>
          </>
        ) : (
          <>
            <Link to={Uri.service}>
              <span css={yellowLineButtonStyle}>Service</span>
            </Link>
            <button
              css={yellowFullButtonStyle}
              type="button"
              onClick={onLogout}
            >
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
