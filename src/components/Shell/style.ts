import { SerializedStyles, Theme, css } from '@emotion/react';

export const formStyle = (theme: Theme): SerializedStyles => css`
  box-sizing: border-box;
  width: 789px;
  padding: 28px 30px;
  margin: 0 auto;

  box-shadow: 1px 3px 20px 3px rgba(0, 83, 191, 0.1);
  border-radius: 12px;

  font-family: ${theme.fontCoding};
  color: ${theme.colorGray2};
  font-size: 30px;
  line-height: 38px;

  h1 {
    margin: 0;
    font-size: 30px;
  }
  p {
    margin: 0;
  }
`;

export const fieldsetStyle = css`
  all: unset;

  display: flex;
  flex-direction: column;

  legend {
    display: none;
  }
`;
