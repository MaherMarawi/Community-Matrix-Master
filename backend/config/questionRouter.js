const express = require('express')
const router = express.Router()
const controller = require('../controllers/questionController')
const { requireAuth, checkedUser } = require('../middlware/authMiddlware')

router.all('*', checkedUser)
router.get('/', controller.home)

router.get('/question', controller.homepage)
router.all('/ask',requireAuth, controller.newQuestion)
router.get('/question/:id', controller.onepage)
router.get('/remove/:id', controller.delete_question)
router.all('/question/edit/:id',requireAuth, controller.editpage)

module.exports = router