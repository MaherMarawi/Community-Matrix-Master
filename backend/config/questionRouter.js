const express = require('express')
const router = express.Router()
const controller = require('../controllers/questionController')
// const { requireAuth, checkedUser } = require('../middlware/authMiddlware')



//get

router.get('/api/Getquestions', controller.AllQuestions)
router.get('/api/Getquestion/:id', controller.OneQuestion)

//post
router.post('/api/AddQuestion', controller.NewQuestion)

//delete
router.delete('/api/RemoveQuestion/:id', controller.DeleteQuestion)

//put
router.put('/api/EditQuestion/:id', controller.ChangeQuestion)


module.exports = router