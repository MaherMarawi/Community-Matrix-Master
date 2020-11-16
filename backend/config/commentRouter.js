const express = require('express')
const router = express.Router()
// const { requireAuth } = require('../middlware/authMiddlware')
const commentController = require('../controllers/commentController')

router.get('/api/AllComments/:id', commentController.GetComments)
router.post('/api/AddComment/:id', commentController.NewComment)
router.delete('/api/RemoveComment/:id', commentController.DeleteComment)
router.put('/api/EditComment/:id', commentController.ChangeComment)

module.exports = router