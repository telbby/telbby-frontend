import React, { FC } from 'react';

type ChatBubbleProps = {
  message: string;
  guestInfo?: {
    profileImg: string;
    name: string;
  };
};

const ChatBubble: FC<ChatBubbleProps> = ({ message, guestInfo }) => {
  return (
    <div>
      {guestInfo && (
        <>
          <img src={guestInfo.profileImg} alt="guest-profile-img" />
          <span>{guestInfo.name}</span>
        </>
      )}
      <p>{message}</p>
    </div>
  );
};

ChatBubble.defaultProps = {
  guestInfo: null,
};

export default ChatBubble;
