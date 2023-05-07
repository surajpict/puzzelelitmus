import React from 'react';
import Userform from './components/userform';
import Gamepage from './components/gamepage';
import './App.css';
import Adminview from './components/adminview';

function App() {
  return (
  <div className="App"> 
      <Userform/>
      <Gamepage/>
      <Adminview/>
  </div>
  );
}

export default App;
