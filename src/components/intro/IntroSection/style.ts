import { css, SerializedStyles, Theme } from '@emotion/react';

export const introSectionStyle = (theme: Theme): SerializedStyles => css`
  display: flex;
  justify-content: space-between;
  padding: 20px 12%;
  margin: 100px 0;
  position: relative;
  z-index: 0;

  ${theme.media.medium} {
    flex-direction: column;
  }
`;
