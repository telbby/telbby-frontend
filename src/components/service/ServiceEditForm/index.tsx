import React, { FC, useCallback, useState } from 'react';

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

  const [inputs, setInputs] = useState({
    name,
    description,
    domain,
    firstQuestion,
    theme: theme.toString(),
  });

  const onChange = useCallback(
    (e) => {
      setInputs({
        ...inputs,
        [e.target.name]: e.target.value,
      });
    },
    [inputs],
  );

  const onSubmit = () => {
    // TODO: 서비스 수정 API 연결
  };

  return (
    <form onSubmit={onSubmit}>
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
            value={inputs.name}
            type="text"
            id="service-name"
            name="name"
            onChange={onChange}
          />
        </label>
        <label htmlFor="service-description" css={inputFormStyle}>
          Description :
          <input
            value={inputs.description}
            type="text"
            id="service-description"
            name="description"
            onChange={onChange}
          />
        </label>
        <label htmlFor="service-domain" css={inputFormStyle}>
          Domain :
          <input
            value={inputs.domain}
            type="text"
            id="service-domain"
            name="domain"
            onChange={onChange}
          />
        </label>
        <label htmlFor="service-first-question" css={inputFormStyle}>
          First Question :
          <input
            value={inputs.firstQuestion}
            type="text"
            id="service-first-question"
            placeholder="Give me a feedback"
            name="firstQuestion"
            onChange={onChange}
          />
        </label>
        <fieldset css={radioFormStyle}>
          <legend>Theme : </legend>
          <label htmlFor="theme-1">
            <input
              type="radio"
              id="theme-1"
              name="theme"
              value="1"
              checked={inputs.theme === '1'}
              onChange={onChange}
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
              value="2"
              checked={inputs.theme === '2'}
              onChange={onChange}
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
