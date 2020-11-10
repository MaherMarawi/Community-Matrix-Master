const Question = require('../models/questionSchema')
const User = require('../models/userSchema')
const Comment = require('../models/commentSchema')

const home = (req, res) => {
    res.redirect('/question')
}
const homepage = (req, res) => {
    Question.find().sort({ createdAt: -1 })
        .then(result => {
            res.render('index', { title: 'homepage', error: '', data: result, new_action: '/question', post: '' })
        })
        .catch(err => console.log(err))
}
const newQuestion = (req, res) => {
    if (req.method === 'GET') {
        res.render('newQuestion', { error: '', new_action: '/ask', post: '', title: 'new question' })
    } else {
        const question = new Question(req.body)
        question.user_id = res.locals.user._id
        question.save()
            .then(() => {
                res.redirect('/question')
            })
            .catch(err => {
                res.render('newQuestion', { title: 'new question', error: err.errors, new_action: '/ask', post: '' })
            })
    }
}

const onepage = (req, res) => {
    Question.findById(req.params.id)
        .then((result) => {
            User.findById(result.user_id)
                .then(data => {
                    Comment.find({ question_id: result._id }).sort({ createdAt: -1 })
                        .then(response => {
                            res.render('one', { title: 'one question', post: result, owner: data, comment: response, error: '' })
                        })
                })
                .catch(err => console.log(err))
        })
        .catch(err => console.log(err))
}

const delete_question = (req, res) => {
    Question.findByIdAndDelete(req.params.id)
        .then(() => {
            Comment.deleteMany({ question_id: req.params.id })
                .then(() => { res.redirect('/question') })
                .catch(err => console.log(err))
        })
        .catch(err => console.log(err))
}

const editpage = (req, res) => {
    if (req.method === 'GET') {
        Question.findById(req.params.id)
            .then((result) => { res.render('edit', { title: 'edit Post', post: result, new_action: `/question/edit/${result.id}`, error: '' }) })
            .catch(err => console.log(err))
    } else {
        Question.findByIdAndUpdate({ _id: req.params.id })
            .then(result => {
                result.question = req.body.question
                result.description = req.body.description
                result.save()
                    .then((data) => {
                        res.redirect(`/question/${req.params.id}`)
                    })
                    .catch(err => {
                        Question.findById(result.id)
                            .then(response => { res.render('edit', { title: 'edit post', error: err.errors, post: response, new_action: `/question/edit/${result.id}` }) })
                            .catch(err => console.log(err))
                    })
            })
            .catch(err => console.log(err))
    }
}

module.exports = {
    home,
    homepage,
    onepage,
    editpage,
    newQuestion,
    delete_question
}