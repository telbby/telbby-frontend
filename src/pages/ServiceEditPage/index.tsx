import React, { FC, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Layout from '@/components/common/Layout';
import Loader from '@/components/common/Loader';
import NoService from '@/components/service/NoService';
import ServiceEditForm from '@/components/service/ServiceEditForm';
import useServiceEdit from '@/hooks/useServiceEdit';
import useSnackbar from '@/hooks/useSnackbar';
import theme from '@/styles/theme';

const ServiceEditPage: FC = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const { isLoading, error, serviceInfo, updateServiceInfo } =
    useServiceEdit(serviceId);
  const snackbar = useSnackbar({});

  useEffect(() => {
    if (error) {
      snackbar.showMessage(error, {
        duration: 1500,
        backgroundColor: theme.colorPrimary,
      });
    }
  }, [error]);

  return (
    <Layout>
      {isLoading && <Loader />}
      {serviceInfo && (
        <ServiceEditForm
          serviceInfo={serviceInfo}
          updateServiceInfo={updateServiceInfo}
        />
      )}
      {error && <NoService />}
    </Layout>
  );
};

export default ServiceEditPage;
