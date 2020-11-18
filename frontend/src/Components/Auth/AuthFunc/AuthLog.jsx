import React, { Component } from 'react'
import axios from 'axios'
import IconLoading from './IconLoading'

export default class AuthSign extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',password: '',
            errors: {email: '',password: ''},
            loading: false, emailError: '', passwordError: ''
        }
    }
    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    onClick = () => {
        console.log(this.state)
        this.setState({emailError: this.state.email == '' ? 'Email is required' : ''})
        this.setState({passwordError: this.state.password == '' ? 'Password is required' : ''})
        if (this.state.email && this.state.password !== '') {
            this.setState({errors: null, loading: true, emailError: '', passwordError: ''})
            axios.post(this.props.url, this.state)
                .then(res => {
                    this.setState({loading: false, email: '', password: '', repassword: '', errors: null})
                    localStorage.setItem('Token',  res.data.accessToken )
                    sessionStorage.setItem('User', JSON.stringify(res.data) )
                    this.props.props.props.history.push('/')
                })
                .catch(err => {
                    this.setState({ errors: err?.response && err?.response && err?.response?.data?.errors, loading: false })
                })
        } 
    }
    render() {
        return (
            <div>
            {!this.state.loading ? 
                <React.Fragment>
                <br></br>
                <input type='text' placeholder='Email' name='email' value={this.state.email} onChange={this.onChange} />

            {this.state.errors && this.state.errors.email &&  <p className='error' >{this.state.errors.email}</p> }
            {this.state.emailError &&  <p className='error' >{this.state.emailError}</p> }
            
            <input type='password' name='password' placeholder='Password' value={this.state.password} onChange={this.onChange} />

            {this.state.errors && this.state.errors.password &&  <p className='error' >{this.state.errors.password}</p> }
            {this.state.passwordError && this.state.passwordError &&  <p className='error' >{this.state.passwordError}</p> }
            <button className='sign-btn' onClick={() => this.onClick()} >LOGIN</button>
                </React.Fragment>
                
                 : <IconLoading />}
                
            </div>
        )
    }
}



// import React, { useState } from 'react'
// import { useForm } from "react-hook-form";
// import axios from 'axios'

// function AuthSign({ url, setLoading }) {
//     const errReq = 'This field is required'
//     const [password, setPassword] = useState('')
//     const [backend, setBackend] = useState('')
//     const { register, handleSubmit, errors } = useForm();
//     const onSubmit = async (data) => {
//         setLoading(true)
//         await axios.post(url, data)
//             .then(res => {console.log(res.data)
//                 localStorage.setItem('User', JSON.stringify(res.data ))
//                 setLoading(false)
//             })
//             .catch(err => {
//                 console.log(err?.response?.data?.errors)
//                 const email = err?.response?.data?.errors?.email
//                 setPassword(err?.response?.data?.errors?.password)
//                 // setBackend(password)
//                 setLoading(false)
//                 // console.log(backend)
//                 console.log(password)
//             })
//     };
//     const validate = value => {
//         if (value.includes('@')) return true
//         return false
//     }
//     return (
//         < >
//             <input
//                 name="email" placeholder='email' defaultValue="" ref={register({ required: true, validate: validate })} />
//             {errors.email && errors.email.type === 'required' && <p className='error'>{errReq}</p>}
//             {backend && backend.email && <p className='error'>{backend.email}</p>}
//             {errors.email && errors.email.type === 'validate' && <p className='error'>This should be an email</p>}
//             <input name="password" placeholder='password' ref={register({ required: true })} />
//             {errors.password && errors.password.type === 'required' && <p className='error'>{errReq}</p>}

//             <button className='sign-btn' onClick={handleSubmit(onSubmit)} >LOG IN</button>
//         </>
//     )
// }
// export default AuthSign
