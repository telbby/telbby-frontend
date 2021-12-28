import React, { FC, useEffect } from 'react';

import Jumbotron from '@/components/common/Jumbotron';
import Layout from '@/components/common/Layout';
import Loader from '@/components/common/Loader';
import ServiceList from '@/components/service/ServiceList';
import Shell from '@/components/shell/Shell';
import useService from '@/hooks/useService';
import useSnackbar from '@/hooks/useSnackbar';
import theme from '@/styles/theme';

import { servicePageStyle } from './style';

const ServicePage: FC = () => {
  const { isLoading, error, serviceInfo, deleteService } = useService();
  const snackbar = useSnackbar({
    backgroundColor: theme.colorPrimary,
  });

  useEffect(() => {
    if (error) {
      snackbar.showMessage(error, {
        duration: 1500,
      });
    }
  }, [error]);

  /**
   * FIXME:
   * 가상 API 요청을 위해 만든 코드입니다.
   * 추후 API 연동을 할 때 지워주면 됩니다.
   */
  const requestWhenQueryDone = async () =>
    new Promise((resolve, reject) => {
      setTimeout(
        // () => resolve('Success'),
        () => reject(new Error('Not valid domain. Telbby is great you know?')),
        1000,
      );
    });

  return (
    <Layout>
      {isLoading && <Loader />}
      <div css={servicePageStyle}>
        <Jumbotron title="Add" />
        <Shell
          type="service"
          requestWhenQueryDone={requestWhenQueryDone}
          width="90%"
          height="200px"
        />
        <ServiceList
          serviceCount={serviceInfo.count}
          serviceList={serviceInfo.serviceList}
          onDeleteServiceItem={deleteService}
        />
      </div>
    </Layout>
  );
};

export default ServicePage;
