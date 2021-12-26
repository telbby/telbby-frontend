import React, { FC } from 'react';

import removeImg from '@/assets/images/remove.png';
import useConfirmModal from '@/hooks/useConfirmModal';

import {
  itemBoxStyle,
  itemInfoDetailStyle,
  itemInfoStyle,
  itemInfoTitleStyle,
  removeButtonStyle,
} from './style';

type ServiceItemProps = {
  id: number;
  name: string;
  domain: string;
  clientId: string;
  onDeleteServiceItem: (id: string) => void;
};

const ServiceItem: FC<ServiceItemProps> = ({
  id,
  name,
  domain,
  clientId,
  onDeleteServiceItem,
}) => {
  const { open, setConfirmModal } = useConfirmModal();

  const openModal = () => {
    setConfirmModal({
      acceptHandler: () => {
        onDeleteServiceItem(id.toString());
        window.location.reload();
      },
    });

    open({ message: `Do you really want to delete ${name} service?` });
  };

  return (
    <div css={itemBoxStyle}>
      <div css={itemInfoStyle}>
        <div css={itemInfoTitleStyle}>
          <h3>{name}</h3>
          <span>{domain}</span>
        </div>
        <div css={itemInfoDetailStyle}>Client ID : {clientId}</div>
      </div>
      <button type="button" css={removeButtonStyle} onClick={openModal}>
        <img src={removeImg} alt="remove" />
      </button>
    </div>
  );
};

export default ServiceItem;
