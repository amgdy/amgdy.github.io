import React from 'react';
import './App.css';
import { NavBar } from './components/nav-bar/nav-bar';
import { Greeting } from './components/greetings/greetings';

function App() {
  return (
    <div className="App">
      <div>
        <NavBar />
        <Greeting />
      </div>
    </div>
  );
}

export default App;
