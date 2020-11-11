
const Comment = require('../models/commentSchema')

// const GetComments = (req, res) => {
//     Comment.find()
//         .then( result => res.send(result))
//         .catch( err => res.send(err))
// }

const GetComments = (req, res) => {
    Comment.find({ question_id: req.params.id }).sort({ createdAt: -1 })
            .then(response => res.send(response))
            .catch(err => console.log(err))

} 

const NewComment = (req, res) => {
    const comment = new Comment(req.body)
    comment.question_id = req.params.id
    comment.save()
        .then(() => {
            res.send('Added Comment')
        })
        .catch(err => {
            res.send(err)
        })
}

const DeleteComment = (req, res) => {
    Comment.findByIdAndDelete(req.params.id)
        .then((comment) => { res.redirect('/question/' + comment.question_id) })
        .catch(err => res.send(err))
}

const ChangeComment = (req, res) => {
        Comment.findByIdAndUpdate(req.params.id, req.body, {useFindAndModify:false})
            .then((result) => {
                res.send(result)
            })
            .catch(err => res.send(err))
    
}


module.exports = {
    GetComments,
    NewComment,
    DeleteComment,
    ChangeComment
}