import { SerializedStyles, Theme, css } from '@emotion/react';

type FormStyleProps = {
  theme?: Theme;
  width?: number;
  height?: number;
};

export const formWrapperStyle = ({
  width,
  height,
}: FormStyleProps): SerializedStyles => css`
  box-sizing: border-box;
  width: ${width}px;
  height: ${height}px;
  padding: 20px 24px;
  margin: 0 auto;
  box-shadow: 1px 3px 20px 3px rgba(0, 83, 191, 0.1);
  border-radius: 12px;
  background-color: #fff;
`;

export const formStyle = (theme: Theme): SerializedStyles => css`
  box-sizing: border-box;
  overflow-y: scroll;
  width: 100%;
  height: 100%;
  font-family: ${theme.fontCoding};
  color: ${theme.colorGray2};
  background-color: #fff;
  font-size: 22px;
  line-height: 32px;

  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }

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
