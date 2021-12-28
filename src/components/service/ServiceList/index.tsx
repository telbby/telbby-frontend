import React, { FC } from 'react';

import NoService from '../NoService';
import ServiceItem from '../ServiceItem';
import { headerStyle, listStyle, wrapperStyle } from './style';

type ServiceListProps = {
  serviceCount: number;
  serviceList: {
    id: number;
    name: string;
    domain: string | null;
    clientId: string;
  }[];
  onDeleteServiceItem: (id: string) => void;
};

const ServiceList: FC<ServiceListProps> = ({
  serviceCount,
  serviceList,
  onDeleteServiceItem,
}) => {
  return (
    <section css={wrapperStyle}>
      {serviceList && serviceList.length > 0 ? (
        <>
          <h2 css={headerStyle}>
            Services <span>{serviceCount}</span>
          </h2>
          <div css={listStyle}>
            {serviceList.map((service) => {
              return (
                <ServiceItem
                  key={service.id}
                  id={service.id}
                  name={service.name}
                  domain={service.domain || ''}
                  clientId={service.clientId}
                  onDeleteServiceItem={onDeleteServiceItem}
                />
              );
            })}
          </div>
        </>
      ) : (
        <NoService />
      )}
    </section>
  );
};

export default ServiceList;
