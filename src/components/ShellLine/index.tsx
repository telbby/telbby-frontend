import React, { ReactElement } from 'react';

type ShellLineProps = {
  type: string;
  title: string;
};

const ShellLine = ({
  type, //
  title,
}: ShellLineProps): ReactElement => {
  return (
    <label htmlFor={title}>
      {type} {title} :
      <input type="text" id={title} />
    </label>
  );
};

ShellLine.defaultProps = {
  // autofocus: false,
};

export default ShellLine;
