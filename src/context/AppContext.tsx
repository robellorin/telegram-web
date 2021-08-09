import React, { createContext, useState, ReactNode } from 'react';
import noop from 'lodash/noop';

import { Message } from 'models';

interface IAppContext {
  messageData: Message[];
  setMessageData: (data: Message[]) => void;
  popoverAnchorEl: HTMLElement | null;
  setPopoverAnchorEl: (element: HTMLElement | null) => void;
  mediaType: number;
  setMediaType: (value: number) => void;
}

const DEFAULT_STATE: IAppContext = {
  messageData: [
    {
      content: 'hi, how are you?',
      type: 'text',
      date: new Date(),
      isOwner: false
    },
    {
      content: 'smiling-girl.json',
      type: 'sticker',
      date: new Date(),
      isOwner: false
    },
  ],
  setMessageData: noop,
  popoverAnchorEl: null,
  setPopoverAnchorEl: noop,
  mediaType: 0,
  setMediaType: noop
};

export const AppContext = createContext(DEFAULT_STATE);

export interface IAppProviderProps {
  children?: ReactNode;
}

export const AppProvider = ({ children }: IAppProviderProps) => {
  const [messageData, setMessageData] = useState(DEFAULT_STATE.messageData);
  const [popoverAnchorEl, setPopoverAnchorEl] = React.useState(DEFAULT_STATE.popoverAnchorEl);
  const [mediaType, setMediaType] = useState(DEFAULT_STATE.mediaType);
  React.useEffect(() => {
    const messageEnd = document.getElementById('message-end');
    if (messageEnd) {
      setTimeout(() => {
        messageEnd.scrollIntoView({ behavior: "smooth" });
        setPopoverAnchorEl(null);
      }, 200);
    }
  }, [messageData]);
  return (
      <AppContext.Provider
        value={{
          messageData,
          setMessageData,
          popoverAnchorEl,
          setPopoverAnchorEl,
          mediaType,
          setMediaType
        }}
      >
        {children}
      </AppContext.Provider>
  );
};
