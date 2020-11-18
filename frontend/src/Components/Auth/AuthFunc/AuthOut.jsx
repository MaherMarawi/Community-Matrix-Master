import React from 'react'
import axios from 'axios'
function AuthOut(props) {
    React.useEffect(() => {
        console.log('hello world')
        const token = localStorage.getItem('Token')
        console.log(token)
        console.log(props)
        if (token) {
            localStorage.removeItem('Token')
            sessionStorage.removeItem('User')

            console.log(token)
            axios.get('http://localhost:5000/api/Logout', { headers: {"Authorization" : `Bearer ${token}` }})
            .then( res => {
                console.log('res data',res.data.message)
                localStorage.removeItem('Token')
                sessionStorage.removeItem('User')
                props.history.push('/')
            })
            .catch( err => {console.log(err.response)})
        }
    }, [])
    return(
        <div>
            <p>wait</p>
        </div>
    )

}
export default AuthOut
