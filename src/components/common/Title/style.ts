import { SerializedStyles, Theme, css } from '@emotion/react';

export const titleStyle = (theme: Theme): SerializedStyles => css`
  font-family: ${theme.fontCodingBold};
  font-size: 50px;
  text-align: center;
  color: ${theme.colorGray1};

  span {
    color: ${theme.colorPrimaryDark};
  }

  &::after {
    content: '';
    display: inline-block;
    width: 20px;
    height: 50px;
    margin-left: 0.5px;
    margin-bottom: -2px;
    background-color: ${theme.colorPrimaryDark};
  }
`;
