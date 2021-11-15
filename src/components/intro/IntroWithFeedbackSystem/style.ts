import { css } from '@emotion/react';

export const titleWrapperStyle = css`
  width: 100%;
  text-align: right;
  margin-top: auto;
`;

export const imageWrapperStyle = css`
  width: 100%;
  text-align: center;
  padding: 50px 0;

  img {
    width: 125%;

    @media (max-width: 1000px) {
      width: 100%;
    }
  }
`;
