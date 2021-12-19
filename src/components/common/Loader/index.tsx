import React, { FC } from 'react';

import { loaderWrapperStyle, spinnerStyle } from './style';

const Loader: FC = () => {
  return (
    <div css={loaderWrapperStyle}>
      <div css={spinnerStyle} />
    </div>
  );
};

export default Loader;
