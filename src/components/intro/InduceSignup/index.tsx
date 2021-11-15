import React, { FC } from 'react';

import { Link } from 'react-router-dom';
import IntroSection from '@/components/intro/IntroSection';
import {
  descriptionStyle,
  goSignupLinkStyle,
  titleStyle,
  wrapperStyle,
} from './style';
import Uri from '@/constants/uri';

const InduceSignup: FC = () => {
  return (
    <IntroSection>
      <div css={wrapperStyle}>
        <div>
          <p css={descriptionStyle}>Get user feedback with Telbby</p>
          <h2 css={titleStyle}>Go to sign up quickly</h2>
        </div>
        <div>
          <Link to={Uri.signup}>
            <span css={goSignupLinkStyle}>GO</span>
          </Link>
        </div>
      </div>
    </IntroSection>
  );
};

export default InduceSignup;
