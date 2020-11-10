const express = require('express')
const router = express.Router()
const controller = require('../controllers/userController')
const { notrequireAuth, requireAuth } = require('../middlware/authMiddlware')

router.get('/chat',requireAuth, controller.chat)
router.all('/signup',notrequireAuth, controller.registerPage)
router.all('/login',notrequireAuth, controller.logPage)
router.get('/logout', controller.logout)

module.exports = router