import React from 'react';
import { Header, Footer } from 'components';
import './styles/global.scss';
function App() {
  return (
    <div className="flex flex-col h-screen bg-gray-800">
      <Header></Header>
      <div className="flex-1"></div>
      <Footer></Footer>
    </div>
  );
}

export default App;
