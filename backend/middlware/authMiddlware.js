const jwt = require('jsonwebtoken')
const User = require('../models/userSchema')
const key = process.env.SecretKey

const requireAuth = (req, res, next) => {
    const token = req.cookies.jwt
    if (token) {
        jwt.verify(token, `${key}`, (err, decodedtoken) => {
            if (err) {
                res.send('LoginPage')
            } else {
                next()
            }
        })
    } else {
        res.send('LoginPage')
    }
}
const notrequireAuth = (req, res, next) => {
    const token = req.cookies.jwt
    if (token) {
        jwt.verify(token, `${key}`, (err, decodedtoken) => {
            if (err) {
                next()
            } else {
                res.send('HomePage')
            }
        })
    } else {
        next()
    }
}
// const checkedUser = (req, res, next) => {
//     const token = req.cookies.jwt
//     if (token) {
//         jwt.verify(token, key, async (err, decodedtoken) => {
//             if (err) {
//                 res.locals.user = null
//                 next()
//             } else {
//                 const user = await User.findById(decodedtoken.id)
//                 res.locals.user = user
//                 next()
//             }
//         })
//     } else {
//         res.locals.user = null
//         next()
//     }
// }
module.exports = { 
    requireAuth,
    checkedUser,
    notrequireAuth
}