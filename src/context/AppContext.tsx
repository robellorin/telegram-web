import React, { createContext, useState, ReactNode } from 'react';
import noop from 'lodash/noop';

import { Message } from 'models';

interface IAppContext {
    messageData: Message[];
    setMessageData: (data: Message[]) => void;
    
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
    {
      content: 'smiling-girl.json',
      type: 'sticker',
      date: new Date(),
      isOwner: true,
      isRead: true
    }
  ],
  setMessageData: noop
};

export const AppContext = createContext(DEFAULT_STATE);

export interface IAppProviderProps {
  children?: ReactNode;
}

export const AppProvider = ({ children }: IAppProviderProps) => {
  const [messageData, setMessageData] = useState(DEFAULT_STATE.messageData);
    return (
        <AppContext.Provider
          value={{
            messageData,
            setMessageData
          }}
        >
            {children}
        </AppContext.Provider>
    );
};
