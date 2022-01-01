import React, { FC, useCallback } from 'react';

import Jumbotron from '@/components/common/Jumbotron';
import Layout from '@/components/layout/Layout';
import ServiceList from '@/components/service/ServiceList';
import Shell from '@/components/shell/Shell';
import { reject, renderProps, resolve } from '@/components/shell/helper';
import { NETWORK_ERROR, UNEXPECTED_ERROR } from '@/constants/error';

import { dummy } from './dummyData';
import { servicePageStyle } from './style';

const ServicePage: FC = () => {
  const checkIsValueEmpty = useCallback(
    (option: {
        goBackSequence: number;
        nextSequence: number;
        errorMessage: string;
      }) =>
      (val: string) => {
        const { goBackSequence, nextSequence, errorMessage } = option;

        if (!val) return reject(goBackSequence, errorMessage);

        return resolve(nextSequence);
      },
    [],
  );

  const attemptAddService = useCallback(async (val, body) => {
    if (val !== 'y') return reject(2, 'Access denied');

    try {
      // TODO: 서비스 등록 API 를 호출합니다.

      console.log(body);

      return resolve(4);
    } catch (error) {
      if (!error.response) return reject(1, NETWORK_ERROR);

      return reject(1, UNEXPECTED_ERROR);
    }
  }, []);

  return (
    <Layout>
      <div css={servicePageStyle}>
        <Jumbotron title="Add" />
        <Shell width="789px" height="247px" legend="Telbby Service Shell">
          <Shell.Command
            render={renderProps(
              'printLine',
              '',
              'telbby init v0.1.0 - services',
            )}
          />
          <Shell.Command
            render={renderProps('readLine', 'question', 'service name')}
            formKey="name"
            maxLength={100}
            onEnter={checkIsValueEmpty({
              goBackSequence: 1,
              nextSequence: 2,
              errorMessage: 'Please enter your service name',
            })}
          />
          <Shell.Command
            render={renderProps('readLine', 'question', 'service domain')}
            formKey="domain"
            maxLength={100}
            onEnter={checkIsValueEmpty({
              goBackSequence: 2,
              nextSequence: 3,
              errorMessage: 'Please enter your service domain',
            })}
          />
          <Shell.Command
            defaultValue="y"
            maxLength={1}
            render={renderProps(
              'readLine',
              'question',
              'Would you like to add service? [y/n]',
            )}
            onEnter={attemptAddService}
          />
          <Shell.Command
            defaultValue="y"
            maxLength={1}
            render={renderProps(
              'printLine',
              '',
              'Congrats! service has been added to telbby.',
            )}
            onEnter={attemptAddService}
          />
        </Shell>
        <ServiceList serviceList={dummy} />
      </div>
    </Layout>
  );
};

export default ServicePage;
