import React, { FC, useEffect, useState } from 'react';

import SideLayout from '@/components/layout/SideLayout';
import ServiceEditForm from '@/components/service/ServiceEditForm';
import { ServiceInfo } from '@/types/service';

import { dummy } from './dummyData';

const ServiceEditPage: FC = () => {
  const [serviceInfo, setServiceInfo] = useState<ServiceInfo>(null);

  useEffect(() => {
    setServiceInfo(dummy);
  }, []);

  return (
    <SideLayout>
      {serviceInfo ? (
        <ServiceEditForm serviceInfo={serviceInfo} />
      ) : (
        <div>Loading</div>
      )}
    </SideLayout>
  );
};

export default ServiceEditPage;
