import React, { useState } from 'react';

import Menu from './components/Menu';
import Content from './components/Content';

import './App.css';

function App() {
  const [activePage, setActivePage] = useState('index');

  function handleMenuChange(ev) {
    setActivePage(ev.currentTarget.value);
  }

  return (
    <div className="App">
      <Menu handleMenuChange={handleMenuChange} />
      <Content activePage={activePage} />
    </div>
  );
}

export default App;
