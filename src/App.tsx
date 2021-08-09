import React from 'react';
import { Header, Footer, MessageView } from 'components';
import './styles/global.scss';

function App() {
  
  return (
    <div className="flex flex-col h-screen bg-gray-800">
      <Header></Header>
      <MessageView></MessageView>
      <Footer></Footer>
    </div>
  );
}

export default App;
