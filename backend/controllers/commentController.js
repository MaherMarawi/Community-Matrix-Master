
const Comment = require('../models/commentSchema')

// const GetComments = (req, res) => {
//     Comment.find()
//         .then( result => res.send(result))
//         .catch( err => res.send(err))
// }

const GetComments = (req, res) => {
    Comment.find({ question_id: req.params.id }).sort({ createdAt: -1 })
            .then(response => res.status(200).send(response))
            .catch(err => res.status(404).send(err))

} 

const NewComment = (req, res) => {
    const comment = new Comment(req.body)
    comment.question_id = req.params.id
    console.log(comment)
    comment.save()
        .then((comment) => {
            res.status(200).send(comment)
        })
        .catch(err => {
            res.status(404).send(err)
        })
}

const DeleteComment = (req, res) => {
    Comment.findByIdAndDelete(req.params.id)
        .then((comment) => { res.status(200).send('Comment Removed') })
        .catch(err => res.status(404).send(err))
}

const ChangeComment = (req, res) => {
        Comment.findByIdAndUpdate(req.params.id, req.body, {useFindAndModify:false})
            .then((result) => {
                res.status(200).send(result)
            })
            .catch(err => res.status(404).send(err))
    
}


module.exports = {
    GetComments,
    NewComment,
    DeleteComment,
    ChangeComment
}