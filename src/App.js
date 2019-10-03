import React from 'react';
import logo from './profile.jpg';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-content">


        <div className="profile">

          <div className="profile-details">

            <div>
              <h3>React Developer</h3>
              <p>my name is <b>Safi</b> ,i'm a web applications developer with more than 3 years of full-stack developer experience</p>
              <p><span>📌</span><span>Go</span><span>JS</span><span>AWS</span><span>API</span><span>ReactJs</span> <span>Git</span></p>
              <a href="https://github.com/apotox" className="btn"> Github </a>
            </div>

          </div>


          <div className="profile-pic">


            <div className="img-container">
              <img src={logo} />
            </div>
            <div className="more">
              <a className="btn twitter" href="https://twitter.com/saphidev">@saphidev</a>
              <a className="btn example" href="https://funcomponents.saphy.net">🚀 example 1</a>
              <a className="btn example" href="https://project-2.saphy.net">🌠 example 2</a>
            </div>

          </div>
        </div>


      </header>
    </div>
  );
}

export default App;
