import { SerializedStyles, Theme, css } from '@emotion/react';

export const formHeaderStyle = (theme: Theme): SerializedStyles => css`
  font-family: ${theme.fontCoding};
  display: flex;
  align-items: center;
  margin: 20px 50px;

  img {
    width: 80px;
    height: 80px;
    margin-right: 20px;
    border-radius: 50%;
    border: 2px solid ${theme.colorPrimary};
    object-fit: cover;
    cursor: pointer;
  }

  > div {
    span {
      color: ${theme.colorGray3};
      font-size: 14px;
    }

    h2 {
      margin-top: 6px;
      color: ${theme.colorPrimary};
      font-family: ${theme.fontCodingBold};
      font-size: 32px;
    }
  }

  button {
    height: fit-content;
    padding: 6px 20px;
    margin-left: auto;
    border: none;
    border-radius: 10px;
    background-color: ${theme.colorSuccess};
    color: ${theme.colorWhite};
    font-size: 18px;

    &:hover,
    &:disabled {
      opacity: 0.8;
    }
  }
`;

export const formBodyStyle = css`
  display: flex;
  flex-direction: column;
  margin: 40px;
`;

export const inputFormStyle = (
  theme: Theme,
  isEdited: boolean,
): SerializedStyles => css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
  color: ${theme.colorGray1};
  font-weight: 700;
  font-size: 16px;

  input {
    width: 80%;
    padding: 10px 5px;
    background: none;
    border: none;
    border-bottom: 2px solid ${theme.colorGray2};
    color: ${isEdited ? theme.colorGray2 : theme.colorGray3};
    font-weight: 600;
    font-size: 16px;

    &:focus {
      outline: none;
    }
  }
`;

export const radioFormStyle = (theme: Theme): SerializedStyles => css`
  display: flex;
  border: none;
  padding: 0;
  margin: 0;

  legend {
    width: 20%;
    padding: 0;
    margin-right: 10px;
    float: right;
    color: ${theme.colorGray1};
    font-weight: 700;
    font-size: 16px;
  }

  label {
    position: relative;
    padding-left: 25px;
    margin-right: 30px;
    color: ${theme.colorGray2};
    font-weight: 600;
    cursor: pointer;

    img {
      display: block;
      width: 300px;
      margin-left: -40px;
    }

    input {
      position: absolute;
      top: 3px;
      left: -3px;
      opacity: 0;

      &:checked ~ span {
        background-color: ${theme.colorGray3};
      }

      &:checked ~ span:after {
        display: block;
      }
    }

    span {
      position: absolute;
      top: 5px;
      left: 0;
      height: 12px;
      width: 12px;
      background-color: ${theme.colorWhite};
      border: 2px solid ${theme.colorGray3};
      border-radius: 50%;

      &:after {
        content: '';
        position: absolute;
        display: none;
      }
    }
  }
`;
