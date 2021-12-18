import React, { FC, useCallback, useState } from 'react';

import sendImg from '@/assets/images/send.png';

import ChatBubble from '../ChatBubble';
import { chatInputStyle, chatroomWrapperStyle } from './style';

const ChatRoom: FC = () => {
  const [message, setMessage] = useState('');

  const onChange = useCallback((e) => {
    setMessage(e.target.value);
  }, []);

  return (
    <div css={chatroomWrapperStyle}>
      <ChatBubble message="환영합니다, hseoy님! 저희 happy music 프로젝트에 대한 자유로운 피드백을 받고 있습니다. 소중한 의견 부탁드립니다." />
      <ChatBubble
        message="안녕하세요! 프로젝트 너무 훌륭하군요 !! ㅎㅎㅎ 다만 사용해보니 로그인 기능에 버튼이 제대로 동작하지 않는 버그가 있는 것 같습니다."
        guestInfo={{ profileImg: '', name: 'hseoy' }}
      />
      <ChatBubble message="소중한 피드백 감사합니다. 혹시 어떤 브라우저를 사용하셨는지 여쭤봐도 될까요?" />
      <form css={chatInputStyle}>
        <input type="text" value={message} onChange={onChange} />
        <button type="button">
          <img src={sendImg} alt="chat-send" />
        </button>
      </form>
    </div>
  );
};

export default ChatRoom;
