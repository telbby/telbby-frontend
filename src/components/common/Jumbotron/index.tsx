import React, { FC } from 'react';

import { wrapperStyle, titleStyle, descStyle } from './style';

type JumbotronProps = {
  title: string;
  desc?: string[];
};

const Jumbotron: FC<JumbotronProps> = ({ title, desc }) => {
  return (
    <div css={wrapperStyle}>
      <h1 css={titleStyle}>
        <span>{title}</span> to telbby
      </h1>
      {desc &&
        desc.map((des) => (
          <p css={descStyle} key={des}>
            {des}
          </p>
        ))}
    </div>
  );
};

Jumbotron.defaultProps = {
  desc: null,
};

export default Jumbotron;
