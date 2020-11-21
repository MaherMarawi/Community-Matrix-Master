const express = require('express')
const router = express.Router()
const controller = require('../controllers/userController')
// const { notrequireAuth, requireAuth } = require('../middlware/authMiddlware')

router.post('/api/SignUp', controller.RegisterPage)
router.post('/api/Login', controller.SignIn)
router.get('/api/Logout', controller.SignOut)
router.get('/api/getUsers', controller.Users)
router.get('/api/getUser/:id', controller.oneUser)
router.put('/api/updateUser/:id', controller.updateUser)
module.exports = router