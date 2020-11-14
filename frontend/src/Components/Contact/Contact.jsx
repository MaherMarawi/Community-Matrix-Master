import React from 'react'
import img from "../../img/2.png"
import img1 from "../../img/11.png"

export default function Contact() {
    return (
        <div className="backgroundCO">
            <h1 style={{textAlign:"center" , fontSize:"60px"}}>Contact Us</h1>
            <div className="bodyCO">
                <div className="textttCO">
                    <h1>We’d love to hear from you</h1>
                    <h4>Whether you have a question about React, Node js, Style, need a demo, or anything else, our team is ready to answer all your questions</h4>
                    <img className="imgCO" src={img} alt="img"/>
                </div>
                <div className="textCO">
               <h1> <label>C<img className="logo" src={img1}></img>ntact Us</label></h1>
                    <input className="btnCO" type="text" placeholder="Name"/><br />
                    <input className="btnCO" type="text" placeholder="Email"/><br />
                    <textarea className="btntCO" type="text" placeholder="Message"/><br />
                    <button className='sendCO'>Send</button>
                </div>
            </div>
        </div>
    )
}
