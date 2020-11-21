import React from 'react'
import img from '../../img/9.png'
import img7 from '../../img/11.png'
import { Link } from 'react-router-dom'

export default function AuthPage(props) {
    const [ user, setUser ] = React.useState(null)
    React.useEffect(() => {
        const token = localStorage.getItem('Token')
        const userToken = JSON.parse(sessionStorage.getItem('User'))
        setUser(userToken)
    }, [])
    return (
        <div className="backGround">
            <nav className="nav">
                <div className="top"> 
                    <div className="title">
                        
                        <label>C<img className="logoHome" src={img7}></img>mmunity Matrix Master</label>
                    </div>
                    <div>
                    <Link to={user && user ? '/Auth/logout' : '/Auth/LogIn'} ><button className="button1">{user && user ? 'Logout' : 'Login'}</button></Link> 

                        {!user ? 
                        <Link to='/Auth/SignUp' ><button className="button">Sign in</button></Link> 
                        : <label>Welcom <b style={{color: 'orange'}} >{user?.username && user?.username}</b></label>  }
                    </div>

                </div>
            </nav>
            <div className="phone">
                 <div className="text">
                    <h1>Do you have a questions ?</h1>
                    <h4>Our community is helping with questions, sharing experiences together. We’ve just started and we always seek to improve the conversation. You’ve seen our many Matrix-Master, keep following our social media channels, engage with developers on GitHub, read our blog.
                    We are proud to announce our new official community platform:Matrix-Master.  Now you just need to signup with a new account and join the conversation! Look around and let us know what you think!</h4>
                    <Link to='/community'><button style={{background:'white', marginLeft:"80px",fontWeight:"700", color:'#e76f51'}} className="btn">Community</button></Link> 
                    <Link to='/contact' ><button style={{background:'#e76f51' ,fontWeight:"700", color:'white'}} className="btn">Contact</button></Link> 
                 </div>
                 <div>
                      <img src={img} style={{height:"500px" , marginLeft:"100px" , marginTop:"100px" , marginRight:"50px"}}></img>
                 </div>
            </div>
         </div>
    )
}
