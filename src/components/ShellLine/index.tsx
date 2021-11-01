import React, { ReactElement } from 'react';

const ShellLine = ({ type, title }): ReactElement => {
  return (
    <label htmlFor={title}>
      {type} {title} :
      <input type="text" id={title} />
    </label>
  );
};

export default ShellLine;
