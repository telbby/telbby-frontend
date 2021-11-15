import React, { FC } from 'react';

import clientUiImage from '@/assets/images/intro-client-ui.png';
import IntroTitle from '@/components/intro/IntroTitle';
import IntroSection from '@/components/intro/IntroSection';

import {
  imageWrapperStyle,
  titleWrapperStyle,
  backgroundBannerStyle,
} from './style';

const IntroWithClientUI: FC = () => {
  return (
    <IntroSection>
      <div css={backgroundBannerStyle} aria-hidden />
      <div css={titleWrapperStyle}>
        <IntroTitle
          title={['To get', 'user feedback easily']}
          descList={[
            'With Telby, you can easily build a user feedback system for any project.',
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
