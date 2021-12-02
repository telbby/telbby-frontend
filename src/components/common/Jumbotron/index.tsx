import React, { FC } from 'react';

import { descStyle, titleStyle, wrapperStyle } from './style';

type JumbotronProps = {
  title: string;
  descList?: string[];
};

const Jumbotron: FC<JumbotronProps> = ({ title, descList }) => {
  const isDescList = descList !== null;

  return (
    <div css={wrapperStyle}>
      <h1 css={(theme) => titleStyle(theme, isDescList)}>
        <span>{title}</span> to telbby
      </h1>
      {descList &&
        descList.map((desc) => (
          <p css={descStyle} key={desc}>
            {desc}
          </p>
        ))}
    </div>
  );
};

Jumbotron.defaultProps = {
  descList: null,
};

export default Jumbotron;
