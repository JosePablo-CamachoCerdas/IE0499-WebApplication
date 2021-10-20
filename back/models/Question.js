const mongoose = require('mongoose');

// question and answer structure 
const question = {
    type: String,
    trim: true,
    require: true,
    maxlength: 2000
}

const answer = {
    type: String,
    trim: true,
    require: true,
    maxlength: 2000
}

const isCorrect = {
    type: Boolean, 
    default: false 
}

// question schema
const questionSchema = new mongoose.Schema(
    {
        question: question,

        answer_1: answer,
        iscorrect_1: isCorrect,

        answer_2: answer,
        iscorrect_2: isCorrect,

        answer_3: answer,
        iscorrect_3: isCorrect,

        answer_4: answer,
        iscorrect_4: isCorrect,

        answer_5: answer,
        iscorrect_5: isCorrect
    }
)

module.exports = mongoose.model("Question", questionSchema)