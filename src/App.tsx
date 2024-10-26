import React, { useEffect } from 'react';
import './App.css';
import { NavBar } from './components/nav-bar/nav-bar';
import { Greeting } from './components/greetings/greetings';

function App() {
  useEffect(() => {
    document.title = "Ahmed Magdy Personal Website";
  }, []);
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
