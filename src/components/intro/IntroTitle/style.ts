import { SerializedStyles, Theme, css } from '@emotion/react';

export const titleStyle = (theme: Theme): SerializedStyles => css`
  color: ${theme.colorIndigo};
  font-size: 45px;
  padding-bottom: 20px;

  @media (max-width: 600px) {
    font-size: 35px;
  }

  @media (max-width: 450px) {
    font-size: 30px;
  }
`;

export const descriptionStyle = (theme: Theme): SerializedStyles => css`
  color: ${theme.colorGray2};
  font-size: 20px;

  @media (max-width: 450px) {
    font-size: 18px;
  }
`;
