import React, { FC, useEffect, useState } from 'react';

import Layout from '@/components/common/Layout';
import ServiceEditForm from '@/components/service/ServiceEditForm';
import { ServiceInfo } from '@/types/service';

import { dummy } from './dummyData';

const ServiceEditPage: FC = () => {
  const [serviceInfo, setServiceInfo] = useState<ServiceInfo>(null);

  useEffect(() => {
    setServiceInfo(dummy);
  }, []);

  return (
    <Layout>
      {serviceInfo ? (
        <ServiceEditForm serviceInfo={serviceInfo} />
      ) : (
        <div>Loading</div>
      )}
    </Layout>
  );
};

export default ServiceEditPage;
