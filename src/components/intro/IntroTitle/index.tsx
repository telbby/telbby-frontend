import { nanoid } from 'nanoid';
import React, { FC } from 'react';

import { descriptionStyle, titleStyle } from './style';

type IntroTitleProps = {
  title?: string | string[];
  descList?: string[];
};

const IntroTitle: FC<IntroTitleProps> = ({ title, descList }) => {
  return (
    <>
      <h2 css={titleStyle}>
        {Array.isArray(title)
          ? title.map((line) => <div key={nanoid()}>{line}</div>)
          : title}
      </h2>
      <div css={descriptionStyle}>
        {descList.map((desc) => (
          <p key={nanoid()}>{desc}</p>
        ))}
      </div>
    </>
  );
};

IntroTitle.defaultProps = {
  title: null,
  descList: null,
};

export default IntroTitle;
