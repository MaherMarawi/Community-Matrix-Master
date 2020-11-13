import React from 'react'
import img from '../../img/2.png'
import img1 from '../../img/3.png'
import img2 from '../../img/1.png'

export default function About() {
    return (
        <div className="backGroundAB">
            <div>
                <h1 style={{textAlign:"center" , marginTop:"0px" ,paddingTop:"30px"}}>About Us</h1>
            </div>
            <div className="medalAB">
                <div>
                    <img className="imgAB" src={img}></img>
                    <h2 className="textAB text2AB">Maher Marawi</h2>
                    <p className="textAB text3AB">Lorem ipsum dolor sit amet
                     consectetur adipisicing elit. Architecto neque at fuga 
                     illo error alias consectetur nemo excepturi </p>
                    <img className="img1AB" src={img1}></img>
                    <h2 className="textAB text2AB">Samer Zenklo</h2>
                    <p className="textAB text3AB">Lorem ipsum dolor sit amet
                     consectetur adipisicing elit. Architecto neque at fuga 
                     illo error alias consectetur nemo excepturi </p>
                </div>

                <div className="medal2AB">
                    <h2 className="texttAB">Mohammad Boushi</h2>
                    <p className="txtAB">Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Architecto neque at fuga illo error alias 
                    consectetur nemo excepturi </p>
                    <img className="img2AB" src={img2}></img>
                    <h2>Dareen Zenbarakji</h2>
                    <p className="txt1AB">Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Architecto neque at fuga illo error alias 
                    consectetur nemo excepturi </p>
                    <img className="img22AB" src={img2}></img>
                </div>
            </div>
        </div>
    )
}
