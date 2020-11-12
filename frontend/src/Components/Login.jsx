import React, { useState, useEffect} from 'react'
import axios from 'axios'

function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const onClick = () => {
        // console.log(email, password)
        axios.post('http://localhost:5000/api/Login', {email, password})
            .then(res => {
                localStorage.setItem('Token', res.data.accessToken)
                })
            .catch(err => console.log(err))
                
        console.log(localStorage.accessToken)    
    }
    return (
        <div>
            <input type='text' onChange={(e) => setEmail(e.target.value)} />
            <input type='text' onChange={(e) => setPassword(e.target.value)} />
            <button onClick={onClick}>login</button>
            {localStorage.getItem('Token') ? <p>you are logged in</p> : <p>you are not logged in</p>}
        </div>
    )
}

export default Login
