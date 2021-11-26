import { css, SerializedStyles, Theme } from '@emotion/react';

export const titleWrapperStyle = css`
  width: 100%;
  text-align: right;
  margin-top: auto;
`;

export const imageWrapperStyle = (theme: Theme): SerializedStyles => css`
  width: 100%;
  text-align: center;
  padding: 50px 0;

  img {
    width: 125%;

    ${theme.media.medium} {
      width: 100%;
    }
  }
`;
