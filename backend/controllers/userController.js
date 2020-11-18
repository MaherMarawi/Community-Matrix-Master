const User = require('../models/userSchema')
const jwt = require('jsonwebtoken')
const maxAge = 3 * 24 * 60 * 60

const handelErrors = (err) => {
    //console.log(err.message, err.code)

    let errors = { email: '', password: ''}

    if (err.message.includes('user validation failed')) {
        Object.values(err.errors).forEach(({properties}) => {
            errors[properties.path] = properties.message
        })
        return errors
    }
    if (err.code == 11000) {
        errors.email = 'that email is already registerd'
        return errors
    }
    if (err.message == 'email is incorrect') {
        errors.email = 'this email is not registerd'
        return errors
    }
    if (err.message == 'password is incorrect') {
        errors.password = 'password is incorrect'
        return errors
    }
    if (err.message == 'please enter your email') {
        errors.email = 'please enter your email'
        return errors
    }
}
const key = process.env.SecretKey
const createjwt = function (id) {
    return jwt.sign({ id }, `${key}`, { 
        expiresIn: maxAge
     })
}
const RegisterPage = async (req, res) =>  {
    
        if (req.body.password == req.body.repassword) {
            const { username, email, password } = req.body
            const user = new User({ username, email, password })
            user.save()
                .then(user => {
                    console.log(user)
                    const token = createjwt(user._id)
                    res.status(200).send({message: 'Registerd', accessToken: token, id: user._id, username: user.username})})
                .catch( (err) => {
                    const errors = handelErrors(err)
                 res.status(404).send( { errors } )
                })
        } else {
            const errors = { email: '', password: 'Password does not match' }
            res.status(404).send( { errors } )
        }
    
}
const SignIn = async (req, res) => {
        const { email, password } = req.body
        try {
            const user = await User.login(email, password)
            const token = createjwt(user._id)
            res.status(200).send({message: 'Logged In', accessToken: token, id: user._id, username: user.username})
        } catch (error) {
            const errors = handelErrors(error)
            res.status(404).send( {errors} )
        }
    
}
const SignOut = (req, res) => {
    res.send({message: 'Client Loged Out', accessToken:''})
}
const Users = (req, res) => {
    User.find().sort({ createdAt: -1 })
        .then(result => {
            res.status(200).send(result)
        })
        .catch(err => res.status(404).send(err))
}

module.exports = {
    RegisterPage,
    SignIn,
    SignOut,
    Users
}


