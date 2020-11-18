import React, { useState, useEffect } from 'react'
import logo from '../../../img/7.png'
import AuthSign from '../AuthFunc/AuthSign'
import IconLoading from '../AuthFunc/IconLoading'
import AuthLog from '../AuthFunc/AuthLog'
function AuthInfo(props) {
    const [btn, setBtn] = useState(true)
    const [loading, setLoading] = useState(false)
    const onClick = () => setBtn(!btn)
    useEffect(() => {
        setBtn((props.param) == 'SignUp' ? true : (props.param) == 'LogIn' ? false : null)
    }, [])
    return (
        <div className='infoAuth' style={{ transition: '0.3s' }}>
            <div>
                <img src={logo} alt="logo" style={{width: '75px'}} />
                <h3>BE ONE OF US!</h3>
            </div>
            <div style={{ transition: '0.3s' }}>
                {btn ?
                    <div style={{ height: btn ? '0' : '32%', transition: '0.3s' }}>
                        {!loading ? <AuthSign url={'http://localhost:5000/api/SignUp'} props={props} />
                            : <IconLoading />}
                    </div>
                    :
                    <div className='ch' style={{ height: btn ? '21%' : '0px', transition: '0.3s' }}>
                        {!loading ? <AuthLog url={'http://localhost:5000/api/Login'} props={props} />
                            : <IconLoading />}
                    </div>
                }
            </div>
            <label>{btn ? 'you have an account' : `Don't have an account`}<b><button onClick={onClick} className='switch'>{btn ? 'LOG IN' : 'SIGN UP'}</button></b></label>
        </div>
    )
}
export default AuthInfo
