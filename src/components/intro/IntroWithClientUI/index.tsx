import React, { FC } from 'react';

import clientUiImage from '@/assets/images/intro-client-ui.png';
import IntroSection from '@/components/intro/IntroSection';
import IntroTitle from '@/components/intro/IntroTitle';

import {
  backgroundBannerStyle,
  imageWrapperStyle,
  titleWrapperStyle,
} from './style';

const IntroWithClientUI: FC = () => {
  return (
    <IntroSection>
      <div css={backgroundBannerStyle} aria-hidden />
      <div css={titleWrapperStyle}>
        <IntroTitle
          title={['To Get', 'User Feedback Easily']}
          descList={[
            'With Telbby, you can easily build a user feedback system for any project.',
          ]}
        />
      </div>
      <div css={imageWrapperStyle}>
        <img src={clientUiImage} alt="client ui" />
      </div>
    </IntroSection>
  );
};

export default IntroWithClientUI;
