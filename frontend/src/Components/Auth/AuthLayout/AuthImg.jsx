import React from 'react'
import { Link } from 'react-router-dom'
import img from '../../../img/10.png'
function AuthImg() {

    return (
        <div className='imgAuth'>
            <img src={img} alt="img"/>
            <h1>WELCOME TO ASK!</h1>
            <p>Lorem ipsum doloem ipsum dolor sit amet consectetur adipisicing. Nam illum </p>
            <Link to='/community' ><button>  Back to Home</button></Link>
        </div>
    )
}

export default AuthImg
