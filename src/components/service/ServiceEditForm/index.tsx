import React, { FC, useCallback, useEffect, useState } from 'react';

import defaultProfileImg from '@/assets/images/logo.png';
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

type ServiceEditFormInput = {
  name: string;
  description: string;
  domain: string;
  firstQuestion: string;
  theme: string;
};

type ImageInput = {
  preview: string;
  raw: File | null;
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

  const [inputs, setInputs] = useState<ServiceEditFormInput>({
    name,
    description,
    domain,
    firstQuestion,
    theme: theme.toString(),
  });
  const [image, setImage] = useState<ImageInput>({
    preview: profileImg || defaultProfileImg,
    raw: null,
  });
  const [isBtnActive, setIsBtnActive] = useState<boolean>(false);

  useEffect(() => {
    setIsBtnActive(
      name !== inputs.name ||
        description !== inputs.description ||
        domain !== inputs.domain ||
        firstQuestion !== inputs.firstQuestion ||
        theme.toString() !== inputs.theme ||
        profileImg !== image.preview,
    );
  }, [inputs, image]);

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

  const onChangeImgFile = (e) => {
    if (e.target.files.length) {
      setImage({
        preview: URL.createObjectURL(e.target.files[0]),
        raw: e.target.files[0],
      });
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <div css={formHeaderStyle}>
        <label htmlFor="service-profile">
          <input
            accept="image/*"
            type="file"
            name="image"
            id="service-profile"
            hidden
            onChange={onChangeImgFile}
          />
          <img src={image.preview} alt="service profile" />
        </label>
        <div>
          <span>Client ID: {clientId}</span>
          <h2>{inputs.name}</h2>
        </div>
        <button type="submit" disabled={!isBtnActive}>
          SAVE
        </button>
      </div>
      <div css={formBodyStyle}>
        <label
          htmlFor="service-name"
          css={(cssTheme) => inputFormStyle(cssTheme, name !== inputs.name)}
        >
          Name :
          <input
            value={inputs.name}
            type="text"
            id="service-name"
            name="name"
            onChange={onChange}
          />
        </label>
        <label
          htmlFor="service-description"
          css={(cssTheme) =>
            inputFormStyle(cssTheme, description !== inputs.description)
          }
        >
          Description :
          <input
            value={inputs.description}
            type="text"
            id="service-description"
            name="description"
            onChange={onChange}
          />
        </label>
        <label
          htmlFor="service-domain"
          css={(cssTheme) => inputFormStyle(cssTheme, domain !== inputs.domain)}
        >
          Domain :
          <input
            value={inputs.domain}
            type="text"
            id="service-domain"
            name="domain"
            onChange={onChange}
          />
        </label>
        <label
          htmlFor="service-first-question"
          css={(cssTheme) =>
            inputFormStyle(cssTheme, firstQuestion !== inputs.firstQuestion)
          }
        >
          First Question :
          <input
            value={inputs.firstQuestion}
            type="text"
            id="service-first-question"
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
