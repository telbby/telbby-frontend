import { SerializedStyles, Theme, css } from '@emotion/react';

export const backgroundBannerStyle = (theme: Theme): SerializedStyles => css`
  background-color: ${theme.colorPrimaryLight};
  width: 100%;
  height: 500px;
  position: absolute;
  top: 100px;
  left: 0;
  z-index: -1;
`;

export const titleWrapperStyle = css`
  width: 100%;
  padding-top: 45px;
  padding-bottom: 50px;
`;

export const imageWrapperStyle = css`
  width: 100%;
  text-align: center;

  img {
    width: 100%;
    max-width: 700px;
  }
`;
