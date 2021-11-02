import React, { FC } from 'react';

import { titleStyle } from './style';

type TitleProps = {
  text: string;
};

const Title: FC<TitleProps> = ({ text }) => {
  return (
    <h1 css={titleStyle}>
      <span>{text}</span> to telbby
    </h1>
  );
};

export default Title;
