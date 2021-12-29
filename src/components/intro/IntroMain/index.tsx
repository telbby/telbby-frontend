import React, { FC } from 'react';

import Jumbotron from '@/components/common/Jumbotron';
import Shell from '@/components/shell/Shell';
import { renderProps } from '@/components/shell/helper';

import IntroSection from '../IntroSection';
import { introMainWrapperStyle } from './style';

const IntroMain: FC = () => {
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

        <Shell width="789px" height="147px" legend="Telbby Service Shell">
          {/* TODO: 입력폼에 대한 기능 추가가 필요합니다 */}
          <Shell.Command
            render={renderProps(
              'printLine',
              '',
              'telbby init v0.1.0 - services',
            )}
          />
          <Shell.Command
            render={renderProps('readLine', 'question', 'email')}
          />
        </Shell>
      </div>
    </IntroSection>
  );
};

export default IntroMain;
