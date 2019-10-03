
import React from 'react'
import logo from './profile.jpg';

export const Profile = ({ stack,title }) => {



    return <div className="profile">

        <div className="profile-details">

            <div>
                <h3>{title}</h3>
                <p>my name is <b>Safi</b> ,i'm a web applications developer with more than 3 years of full-stack developer experience</p>
                <p><span>📌</span>
                {
                    stack.map((tech,index)=><span key={index}>{tech}</span>)
                }</p>
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
}