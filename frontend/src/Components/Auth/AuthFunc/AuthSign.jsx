import React, { Component } from 'react'
import axios from 'axios'
import IconLoading from './IconLoading'

export default class AuthSign extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '', email: '', password: '', repassword: '',
            errors: { email: '', password: '' },
            loading: false, emailError: '', passwordError: '', repasswordError: ''
        }
    }
    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
        console.log(this.state)
    }
    onClick = () => {
        this.setState({ emailError: this.state.email == '' ? 'Email is required' : '' })
        this.setState({ passwordError: this.state.password == '' ? 'Password is required' : '' })
        this.setState({ repasswordError: this.state.repassword == '' ? 'RePassword is required' : '' })
        if (this.state.email && this.state.password && this.state.repassword !== '') {
            this.setState({ errors: null, loading: true })
            axios.post(this.props.url, this.state)
                .then(res => {

                    console.log(res.data)

                    this.setState({ loading: false, email: '', password: '', repassword: '', errors: null })
                    localStorage.setItem('Token',  res.data.accessToken )
                    sessionStorage.setItem('User', JSON.stringify(res.data) )
                    this.props.props.props.history.push('/')

                })
                .catch(err => {
                    console.log(err)
                    this.setState({ errors: err.response && err.response && err.response.data.errors, loading: false })
                })
        }
    }
    render() {
        return (
            <div>
                {!this.state.loading ?
                    <div>
                        <input type='text' placeholder='User Name' value={this.state.username} name='username' onChange={this.onChange} />

                        <input type='text' value={this.state.email} placeholder='Email' name='email' onChange={this.onChange} />

                        {this.state.errors && this.state.errors.email && <p className='error' >{this.state.errors.email}</p>}

                        {this.state.emailError && this.state.emailError && <p className='error' >{this.state.emailError}</p>}

                        <input type='password' name='password' value={this.state.password} placeholder='Password' onChange={this.onChange} />

                        {this.state.errors && this.state.errors.password && <p className='error' >{this.state.errors.password}</p>}
                        
                        {this.state.passwordError && this.state.passwordError && <p className='error' >{this.state.passwordError}</p>}

                        <input type='password' placeholder='RePassword' value={this.state.repassword} name='repassword' onChange={this.onChange} />

                        {this.state.repasswordError && this.state.repasswordError && <p className='error' >{this.state.repasswordError}</p>}

                        <button className='sign-btn' onClick={() => this.onClick()} >SIGN UP</button>

                    </div> : <IconLoading />}

            </div>
        )
    }
}

// import React, { useState } from 'react'
// import { useForm } from "react-hook-form";
// import axios from 'axios'

// function AuthSign({ url, setLoading }) {
//     const errReq = 'This field is required'
//     const { register, handleSubmit, errors } = useForm();
//     const [backend, setBackEnd] = useState(null)
//     const onSubmit = async (data) => {
//         setLoading(true)
//         await axios.post(url, data)
//             .then(res => {console.log(res.data)
//                 localStorage.setItem('User', JSON.stringify(res.data ))
//                 setLoading(false)
//             })
//             .catch( (err) => { console.log(err.response.data.errors)
//                     setBackEnd(err?.response?.data?.errors);
//                     console.log(backend)
//                     setLoading(false)
//                 })
//     }
//     const validate = value => {
//         if (value.includes('@')) return true
//         return false
//     }
//     return (
//         <>
//             <input name="username" placeholder='username' ref={register} />
//             <input name="email" placeholder='email' defaultValue="" ref={register({ required: true, validate: validate })} />
//             {errors.email && errors.email.type === 'required' && <p className='error'>{errReq}</p>}
//             {backend && backend && <p className='error'>{backend.email}</p>}
//             {errors.email && errors.email.type === 'validate' && <p className='error'>This should be an email</p>}
//             <input name="password" placeholder='password' ref={register({ required: true })} />
//             {errors.password && errors.password.type === 'required' && <p className='error'>{errReq}</p>}
//             <input name="repassword" placeholder='repassword' ref={register({ required: true })} />
//             {errors.repassword && errors.repassword.type === 'required' && <p className='error'>{errReq}</p>}
//             <button onClick={handleSubmit(onSubmit)} className='sign-btn'>SIGN UP</button>
//         </>
//     )
// }
// export default AuthSign






