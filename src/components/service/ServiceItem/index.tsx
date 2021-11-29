import React, { FC } from 'react';

import removeImg from '@/assets/images/remove.png';
import useConfirmModal from '@/hooks/useConfirmModal';

import { itemBoxStyle, itemInfoStyle, removeButtonStyle } from './style';

type ServiceItemProps = {
  name: string;
  domain: string;
  clientId: string;
};

const ServiceItem: FC<ServiceItemProps> = ({ name, domain, clientId }) => {
  const [open] = useConfirmModal();

  const openModal = () => {
    open({ message: `Do you really want to delete ${name} service?` });
  };

  return (
    <div css={itemBoxStyle}>
      <div css={itemInfoStyle}>
        <div>
          <h3>{name}</h3>
          <span>{domain}</span>
        </div>
        <div>Client ID : {clientId}</div>
      </div>
      <button type="button" css={removeButtonStyle} onClick={openModal}>
        <img src={removeImg} alt="remove" />
      </button>
    </div>
  );
};

export default ServiceItem;
