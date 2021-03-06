import React from 'react';


import './App.css';
import { Profile } from './profile';

const stack = ["Go","JS","AWS","API","React","Git","Svg"]

const desc = `<p>my name is <b>Safi</b> ,i'm a Software Engineer with more than 3 years of full-stack developer experience</p>`


function App() {
  return (
    <div className="App">
      <header className="App-content">

      <Profile
       stack={stack}
       title={"React/Native Developer"} 
       description={desc}
      />

      </header>
    </div>
  );
}

export default App;
