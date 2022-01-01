import React from 'react';
import { MemoryRouter, Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

import { render, screen, fireEvent } from '@testing-library/react';

import IconTabNavbar from '.';

describe('<IconTabNavbar/> component test', () => {
  it('탭 요소들을 렌더링 해야 합니다.', () => {
    render(
      <MemoryRouter>
        <IconTabNavbar>
          <IconTabNavbar.TabItem>ITEM 1</IconTabNavbar.TabItem>
          <IconTabNavbar.TabItem>ITEM 2</IconTabNavbar.TabItem>
          <IconTabNavbar.TabItem>ITEM 3</IconTabNavbar.TabItem>
          <IconTabNavbar.TabIcon src="#">ICON 1</IconTabNavbar.TabIcon>
          <IconTabNavbar.TabIcon src="#">ICON 2</IconTabNavbar.TabIcon>
          <IconTabNavbar.TabIcon src="#">ICON 3</IconTabNavbar.TabIcon>
        </IconTabNavbar>
      </MemoryRouter>,
    );

    expect(screen.queryByText('ITEM 1')).toBeInTheDocument();
    expect(screen.queryByText('ITEM 2')).toBeInTheDocument();
    expect(screen.queryByText('ITEM 3')).toBeInTheDocument();

    expect(screen.queryByAltText('ICON 1')).toBeInTheDocument();
    expect(screen.queryByAltText('ICON 2')).toBeInTheDocument();
    expect(screen.queryByAltText('ICON 3')).toBeInTheDocument();
  });

  describe('<IconTabNavbar.TabItem/> component test', () => {
    it('자식 요소를 렌더링 해야 합니다.', () => {
      render(
        <MemoryRouter>
          <IconTabNavbar.TabItem>Content</IconTabNavbar.TabItem>
        </MemoryRouter>,
      );

      expect(screen.queryByText('Content')).toBeInTheDocument();
    });

    it('함수로 전달된 자식 요소에 URL을 기반으로한 선택 여부를 전달해야 합니다.', () => {
      render(
        <MemoryRouter initialEntries={['/target']}>
          <IconTabNavbar.TabItem to="/target">
            {(selected) => selected && 'TRUE'}
          </IconTabNavbar.TabItem>
        </MemoryRouter>,
      );

      expect(screen.queryByText('TRUE')).toBeInTheDocument();
    });

    it('클릭 핸들러가 지정된 탭 요소를 클릭하면 해당 클릭 핸들러가 호출되어야 합니다.', () => {
      let isClickHandlerCalled = false;

      render(
        <MemoryRouter>
          <IconTabNavbar.TabItem
            onClickHandler={() => {
              isClickHandlerCalled = true;
            }}
          >
            ITEM
          </IconTabNavbar.TabItem>
        </MemoryRouter>,
      );

      fireEvent.click(screen.getByText('ITEM'));

      expect(isClickHandlerCalled).toBeTruthy();
    });

    it('링크 URL이 지정된 탭 요소를 클릭하면 해당 URL로 이동해야 합니다.', () => {
      const history = createMemoryHistory();

      render(
        <Router history={history}>
          <IconTabNavbar.TabItem to="/target">ITEM</IconTabNavbar.TabItem>
        </Router>,
      );

      fireEvent.click(screen.getByText('ITEM'));

      expect(history.location.pathname).toBe('/target');
    });
  });

  describe('<IconTabNavbar.TabIcon/> component test', () => {
    const DEFAULT_ALT_TEXT = 'icon';

    it('클릭 핸들러가 지정된 아이콘을 클릭하면 해당 클릭 핸들러가 호출되어야 합니다.', () => {
      let isClickHandlerCalled = false;

      render(
        <MemoryRouter>
          <IconTabNavbar.TabIcon
            src="#"
            onClickHandler={() => {
              isClickHandlerCalled = true;
            }}
          />
        </MemoryRouter>,
      );

      fireEvent.click(screen.getByRole('img', { name: DEFAULT_ALT_TEXT }));

      expect(isClickHandlerCalled).toBeTruthy();
    });

    it('링크 URL이 지정된 아이콘을 클릭하면 해당 URL로 이동해야 합니다.', () => {
      const history = createMemoryHistory();

      render(
        <Router history={history}>
          <IconTabNavbar.TabIcon src="#" to="/target" />
        </Router>,
      );

      fireEvent.click(screen.getByRole('img', { name: DEFAULT_ALT_TEXT }));

      expect(history.location.pathname).toBe('/target');
    });

    it('아이콘 이미지의 대체 텍스트를 지정할 수 있어야 합니다.', () => {
      render(
        <MemoryRouter>
          <IconTabNavbar.TabIcon src="#" to="/target">
            Icon Alt Text
          </IconTabNavbar.TabIcon>
        </MemoryRouter>,
      );

      expect(screen.queryByAltText('Icon Alt Text')).toBeInTheDocument();
    });
  });
});
