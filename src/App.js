import React from 'react';


import './App.css';
import { Profile } from './profile';

const stack = ["Go","JS","AWS+Serverless","API","React","Git","Svg"]

const desc = `<p> <b>Safi</b> ,i'm a Software Engineer with more than 3 years of full-stack developer experience</p>`


function App() {
  return (
    <div className="App">
      <header className="App-content">

      <Profile
       stack={stack}
       title={"React / Native"} 
       description={desc}
      />

      </header>
    </div>
  );
}

export default App;
