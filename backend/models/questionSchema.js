

const mongoose = require('mongoose');
const User = require('./userSchema');
const Schema = mongoose.Schema;

const questionSchema = new Schema({
    question: {
    type: String,
    required: [true, 'Please enter a question'],
    minlength: 1,
    maxlength: [50, "it's too long"]
},
    description: {
    type: String,
    required: [true, 'Please enter a description'],
    minlength: 1,
    maxlength: 1500
},
    user_id: {
    type: Schema.Types.ObjectId,
    ref: User
},
},{timestamps: true})

const Question = mongoose.model('Question', questionSchema)

module.exports = Question