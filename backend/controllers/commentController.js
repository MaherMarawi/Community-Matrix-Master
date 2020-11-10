const Question = require('../models/questionSchema')
const Comment = require('../models/commentSchema')
const User = require('../models/userSchema')

const delete_comment = (req, res) => {
    Comment.findByIdAndDelete(req.params.id)
        .then((comment) => { res.redirect('/question/' + comment.question_id) })
        .catch(err => console.log(err))
}

const edit_comment = (req, res) => {
    if (req.method === "GET") {
        Comment.findById(req.params.id)
            .then((result) => { res.render('editComment', { title: 'edit Comment', post: result, new_action: `/edit-comment/${result.id}`, error: '' }) })
            .catch(err => console.log(err))
    }
    if (req.method === "POST") {
        Comment.findById(req.params.id)
            .then((result) => {
                Question.findById(result.question_id)
                    .then((data) => {
                        Comment.findByIdAndUpdate(req.params.id)
                        result.comment = req.body.comment
                        result.save()
                            .then(() => { res.redirect('/question/' + data._id) })
                            .catch(err => {
                                Comment.findById(result.id)
                                    .then((result) => {
                                        res.render('editComment', { title: 'edit Comment', error: err.errors, post: result, new_action: `/edit-comment/${req.params.id}` })
                                    })
                                    .catch(err => console.log(err))
                            })
                    })
                    .catch(err => {

                    })
            })
            .catch(err => console.log(err))
    }
}
const newComment = (req, res) => {
    const comment = new Comment(req.body)
    comment.user_id = res.locals.user._id
    comment.user_name = res.locals.user.username
    comment.question_id = req.params.id
    comment.save()
        .then(() => {
            res.redirect('/question/' + req.params.id)
        })
        .catch(err => {
            Question.findById(req.params.id)
                .then((result) => {
                    User.findById(result.user_id)
                        .then(data => {
                            Comment.find({ question_id: result._id })
                                .then(response => {
                                    res.render('one', { title: 'one question', post: result, owner: data, comment: response, error: err.errors })
                                })
                        })
                        .catch(err => console.log(err))
                })
                .catch(err => console.log(err))
        })
}

module.exports = {
    delete_comment,
    edit_comment,
    newComment
}