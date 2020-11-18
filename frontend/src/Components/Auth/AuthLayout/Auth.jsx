import React from 'react'
import AuthImg from './AuthImg'
import AuthInfo from './AuthInfo'
function Auth(props) {
    return (
        <div className='auth'>
            <AuthImg />
            <AuthInfo param={props.match.params.param} props={props} />
        </div>
    )
}

export default Auth
