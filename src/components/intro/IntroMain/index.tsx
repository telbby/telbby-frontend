import React, { FC } from 'react';

import Shell from '@/components/Shell';
import Jumbotron from '@/components/common/Jumbotron';

import IntroSection from '../IntroSection';
import { introMainWrapperStyle, shellWrapperStyle } from './style';

const IntroMain: FC = () => {
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
    <IntroSection>
      <div css={introMainWrapperStyle}>
        <Jumbotron
          title="Talk"
          descList={[
            'Thinking about project feedback?',
            'Here telbby will listen.',
          ]}
        />
        {
          /* @TODO 입력폼에 대한 기능 추가가 필요합니다 */
          <div css={shellWrapperStyle}>
            <Shell
              type="service"
              requestWhenQueryDone={requestWhenQueryDone}
              width="789px"
              height="208px"
            />
          </div>
        }
      </div>
    </IntroSection>
  );
};

export default IntroMain;
