import React, { FC } from 'react';

import feedbackSystemImage from '@/assets/images/intro-feedback-system.png';
import IntroTitle from '@/components/intro/IntroTitle';
import IntroSection from '@/components/intro/IntroSection';

import { imageWrapperStyle, titleWrapperStyle } from './style';

const IntroWithFeedbackSystem: FC = () => {
  return (
    <IntroSection>
      <div css={imageWrapperStyle}>
        <img src={feedbackSystemImage} alt="feedback system" />
      </div>
      <div css={titleWrapperStyle}>
        <IntroTitle
          title={['Check a Lot of Feedback', 'at Once!']}
          descList={['Telbby helps you communicate easily with users.']}
        />
      </div>
    </IntroSection>
  );
};

export default IntroWithFeedbackSystem;
