import { css } from '@emotion/react';

export const introSectionStyle = css`
  display: flex;
  justify-content: space-between;
  padding: 20px 12%;
  margin: 100px 0;
  position: relative;
  z-index: 0;

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;
