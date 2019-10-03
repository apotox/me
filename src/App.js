import React from 'react';


import './App.css';
import { Profile } from './profile';

const stack = ["Go","JS","AWS","API","ReactJs","Git"]

function App() {
  return (
    <div className="App">
      <header className="App-content">

      <Profile stack={stack} title={"React Developer"}/>

      </header>
    </div>
  );
}

export default App;
