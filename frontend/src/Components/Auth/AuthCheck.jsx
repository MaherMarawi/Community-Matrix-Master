import React from 'react'

function AuthCheck() {
    const [ loggedIn, setLoggedIn ] = React.useState(false)
    const [ id, setId ] = React.useState('')
    const [ name, setName ] = React.useState('')
    React.useEffect(() => {
        const token = localStorage.getItem('Token')
        const user = JSON.parse(sessionStorage.getItem('User')) 
        if (token) {
            setLoggedIn(true)
            // setId(user._id)
            setName(user.username)
            console.log(token)
        }
    }, [])
    
        
    // React.useEffect(() => {
    //     const user = JSON.parse(localStorage.getItem('User')) 
    //     if (user) {
    //         setLoggedIn(true)
    //         setId(user.id)
    //         setName(user.username)
    //     }
    //     console.log(user)
    //     console.log(loggedIn)
    // }, [])
    return ( [ loggedIn, name] )
}

export default AuthCheck
