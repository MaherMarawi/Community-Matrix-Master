import React from 'react'
import img from '../../img/9.png'
import img7 from '../../img/7.png'
import { Link } from 'react-router-dom'

export default function AuthPage() {
    return (
        <div className="backGround">
            <nav className="nav">
                <div className="top"> 
                    <div className="title">
                        
                        <label>C<img className="logo" src={img7}></img>mmunity Matrix Master</label>
                    </div>
                    <div>
                    <button className="button1">Log in</button>
                    <button className="button">Sign in</button>
                    </div>
                </div>
            </nav>
            <div className="phone">
                 <div className="text">
                    <h1>Do you have a questions ?</h1>
                    <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga officia officiis natus quaerat temporibus placeat minus deleniti perferendis cumque.</h4>
                    <Link to='/community'><button style={{background:'white', marginLeft:"80px",fontWeight:"700"}} className="btn">Community</button></Link> 
                    <Link to='/contact' ><button style={{background:'#e76f51' ,fontWeight:"700"}} className="btn">Contact</button></Link> 
                 </div>
                 <div>
                      <img src={img} style={{height:"500px" , marginLeft:"100px" , marginTop:"100px" , marginRight:"50px"}}></img>
                 </div>
            </div>
         </div>
    )
}
