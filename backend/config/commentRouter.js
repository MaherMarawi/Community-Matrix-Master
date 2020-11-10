const express = require('express')
const router = express.Router()
const { requireAuth } = require('../middlware/authMiddlware')
const commentController = require('../controllers/commentController')


router.get('/cancel/:id',requireAuth, commentController.delete_comment)
router.post('/comment/:id',requireAuth, commentController.newComment)
router.all('/edit-comment/:id',requireAuth, commentController.edit_comment)

module.exports = router