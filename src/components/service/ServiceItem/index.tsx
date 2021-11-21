import React, { FC } from 'react';

import removeImg from '@/assets/images/remove.png';

import { itemBoxStyle, itemInfoStyle, removeButtonStyle } from './style';

type ServiceItemProps = {
  name: string;
  domain: string;
  clientId: string;
};

const ServiceItem: FC<ServiceItemProps> = ({ name, domain, clientId }) => {
  return (
    <div css={itemBoxStyle}>
      <div css={itemInfoStyle}>
        <div>
          <h3>{name}</h3>
          <span>{domain}</span>
        </div>
        <div>Client ID : {clientId}</div>
      </div>
      <button type="button" css={removeButtonStyle}>
        <img src={removeImg} alt="remove" />
      </button>
    </div>
  );
};

export default ServiceItem;
