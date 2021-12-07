import React, { FC } from 'react';

import theme1Img from '@/assets/images/theme1.png';
import theme2Img from '@/assets/images/theme2.png';
import { ServiceInfo } from '@/types/service';

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
      <div>
        <img
          src={profileImg}
          alt="service profile"
          width="100px"
          height="100px"
        />
        <div>
          <span>Client ID: {clientId}</span>
          <h1>{name}</h1>
        </div>
        <button type="submit">SAVE</button>
      </div>
      <div>
        <label htmlFor="service-name">
          Name :{' '}
          <input
            value={name}
            type="text"
            id="service-name"
            onChange={() => {}}
          />
        </label>
        <label htmlFor="service-description">
          Description :{' '}
          <input
            value={description}
            type="text"
            id="service-description"
            onChange={() => {}}
          />
        </label>
        <label htmlFor="service-domain">
          Domain :{' '}
          <input
            value={domain}
            type="text"
            id="service-domain"
            onChange={() => {}}
          />
        </label>
        <label htmlFor="service-first-question">
          First Question :{' '}
          <input
            value={firstQuestion}
            type="text"
            id="service-first-question"
            onChange={() => {}}
          />
        </label>
        <fieldset>
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
          </label>
        </fieldset>
      </div>
    </form>
  );
};

export default ServiceEditForm;
