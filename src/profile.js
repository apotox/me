
import React from 'react'
import logo from './profile.jpg';
import bg from './bg.jpg'
import Art from './svg-components/Art'
export const Profile = ({ stack, title, description }) => {



    return <div className="profile">

        <div className="profile-bg">

            <img src={bg} />



        </div>

        <div className="profile-details">



            <div>
                <div className="art-container"><Art data={{ me: "Saphy" }} /></div>
                <h3>{title}</h3>
                <div dangerouslySetInnerHTML={{
                    __html: description
                }} className="white-bg" />
                <p><span>📌</span>
                    {
                        stack.map((tech, index) => <span key={index}>{tech}</span>)
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