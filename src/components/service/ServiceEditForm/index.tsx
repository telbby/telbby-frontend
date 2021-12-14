import React, { FC } from 'react';

import theme1Img from '@/assets/images/theme1.png';
import theme2Img from '@/assets/images/theme2.png';
import { ServiceInfo } from '@/types/service';

import {
  formBodyStyle,
  formHeaderStyle,
  inputFormStyle,
  radioFormStyle,
} from './style';

type ServiceEditFormProps = {
  serviceInfo: ServiceInfo;
};

const ServiceEditForm: FC<ServiceEditFormProps> = ({ serviceInfo }) => {
  const {
    name,
    clientId,
    description,
    domain,
    firstQuestion,
    theme,
    profileImg,
  } = serviceInfo;

  return (
    <form>
      <div css={formHeaderStyle}>
        <img src={profileImg} alt="service profile" />
        <div>
          <span>Client ID: {clientId}</span>
          <h1>{name}</h1>
        </div>
        <button type="submit">SAVE</button>
      </div>
      <div css={formBodyStyle}>
        <label htmlFor="service-name" css={inputFormStyle}>
          Name :
          <input
            value={name}
            type="text"
            id="service-name"
            onChange={() => {}}
          />
        </label>
        <label htmlFor="service-description" css={inputFormStyle}>
          Description :
          <input
            value={description}
            type="text"
            id="service-description"
            onChange={() => {}}
          />
        </label>
        <label htmlFor="service-domain" css={inputFormStyle}>
          Domain :
          <input
            value={domain}
            type="text"
            id="service-domain"
            onChange={() => {}}
          />
        </label>
        <label htmlFor="service-first-question" css={inputFormStyle}>
          First Question :
          <input
            value={firstQuestion}
            type="text"
            id="service-first-question"
            placeholder="Give me a feedback"
            onChange={() => {}}
          />
        </label>
        <fieldset css={radioFormStyle}>
          <legend>Theme : </legend>
          <label htmlFor="theme-1">
            <input
              type="radio"
              id="theme-1"
              name="theme"
              checked={theme === 1}
              onChange={() => {}}
            />
            Color Theme 1
            <img src={theme1Img} alt="theme-1" />
            <span />
          </label>
          <label htmlFor="theme-2">
            <input
              type="radio"
              id="theme-2"
              name="theme"
              checked={theme === 2}
              onChange={() => {}}
            />
            Color Theme 2
            <img src={theme2Img} alt="theme-1" />
            <span />
          </label>
        </fieldset>
      </div>
    </form>
  );
};

export default ServiceEditForm;
