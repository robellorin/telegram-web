import React from 'react';
import { Header, Footer, MessageView } from 'components';
import { Message } from 'models';
import './styles/global.scss';
function App() {
  const [messageData, setMessageData] = React.useState<Message[]>([]);
  const onHandleSendMessage = (message: Message) => {
    setMessageData([...messageData, message]);
  }
  return (
    <div className="flex flex-col h-screen bg-gray-800">
      <Header></Header>
      <MessageView messageData={messageData}></MessageView>
      <Footer onHandleSendMessage={onHandleSendMessage}></Footer>
    </div>
  );
}

export default App;
