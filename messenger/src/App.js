import React from 'react';
import Sidebar from './components/sidebar/Sidebar.js';
import Main from './components/main/Main.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Main />
    </div>
  );
}

export default App;
