import React from 'react'
import img from '../../img/12.png'
import img1 from '../../img/13.png'
import img2 from '../../img/1.png'
import img3 from '../../img/2.png'
import { Link } from 'react-router-dom'

export default function About() {
    return (
        <div className="backGroundAB">
            <div>
                <div className="bodyCO">
                    <h1 className="titleCO">About Us</h1>
                    <Link to='/community' ><button className="BackbtnCO">Go to Community</button></Link>
                </div>
            </div>
            <div className="medalAB">
                <div>
                    <img className="imgAB" src={img2}></img>
                    <h2 className="textAB text2AB">Samer Zenklo</h2>
                    <p className="textAB text3AB">My name is Samer.During this challange, I have learned how to work in teams, discuss problems, errors and challenges we faced and to jointly come up with solutions for these challenges. it was not easy but I enjoyed.</p>
                    <img className="img1AB" src={img1}></img>
                    <h2 className="textAB text2AB">Maher Marawi</h2>
                    <p className="textAB text3AB">My name is Maher.During this challange, I have learned how to work in teams, discuss problems, errors and challenges we faced and to jointly come up with solutions for these challenges. it was not easy but I enjoyed.</p>
                </div>

                <div className="medal2AB">
                    <h2 className="texttAB">Dareen Zenbarakji</h2>
                    <p className="txtAB">My name is Dareen.During this challange, I have learned how to work in teams, discuss problems, errors and challenges we faced and to jointly come up with solutions for these challenges. it was not easy but I enjoyed.</p>
                    <img className="img2AB" src={img3}></img>
                    <h2>Mohammad Boushi</h2>
                    <p className="txt1AB">I have a clear, logical mind with a practical approach to problem-solving and a drive to see things through to completion. I am eager to learn, I enjoy overcoming challenges, and I have a genuine interest in Business Management and making organisations successful.
                    </p>
                    <img className="img22AB" src={img}></img>
                </div>
            </div>
        </div>
    )
}
