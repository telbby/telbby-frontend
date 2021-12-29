import React from 'react';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Shell from '.';

describe('Shell Component 테스트', () => {
  describe('첫 Command type 이 printLine 인 경우', () => {
    beforeEach(() => {
      render(
        <Shell width="800px" height="700px">
          <Shell.Command
            render={{ prefix: '', message: '첫번째 명령', type: 'printLine' }}
          />
          <Shell.Command
            render={{ prefix: '', message: '두번째 명령', type: 'printLine' }}
          />
        </Shell>,
      );
    });

    it('Shell Component 가 마운트 될 때, 즉시 다음 라인을 출력합니다.', () => {
      expect(screen.queryByText('첫번째 명령')).toBeInTheDocument();
      expect(screen.queryByText('두번째 명령')).toBeInTheDocument();
    });
  });

  describe('첫 Command type 이 readLine 인 경우', () => {
    beforeEach(() => {
      render(
        <Shell width="800px" height="700px">
          <Shell.Command
            render={{ prefix: '', message: '첫번째 명령', type: 'readLine' }}
            onEnter={() => {
              return {
                status: 'success',
                nextSequence: 1,
              };
            }}
          />
          <Shell.Command
            render={{ prefix: '', message: '두번째 명령', type: 'printLine' }}
          />
        </Shell>,
      );
    });

    it('Shell Component 가 마운트 될 때, 다음 라인을 바로 출력하지 않습니다.', () => {
      expect(screen.queryByText('첫번째 명령')).toBeInTheDocument();
      expect(screen.queryByText('두번째 명령')).not.toBeInTheDocument();
    });

    it('사용자가 readLine 에 값을 입력할 경우, 다음 라인을 출력합니다.', async () => {
      await userEvent.type(screen.getByRole('textbox'), '테스트값{enter}', {
        delay: 1,
      });
      expect(screen.getByText('두번째 명령')).toBeInTheDocument();
    });
  });
});
