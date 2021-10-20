const mongoose = require('mongoose');
const questionSchema = new mongoose.Schema(
    {
        question: {
            type: String,
            trim: true,
            require: true,
            maxlength: 2000
        },
        answer1: {
            type: String,
            trim: true,
            require: true,
            maxlength: 2000
        },
        iscorrect1: {
            type: Boolean, 
            default: false 
        },
        answer2: {
            type: String,
            trim: true,
            require: true,
            maxlength: 2000
        },
        iscorrect2: {
            type: Boolean, 
            default: false 
        },
        answer3: {
            type: String,
            trim: true,
            require: true,
            maxlength: 2000
        },
        iscorrect3: {
            type: Boolean, 
            default: false 
        },
        answer4: {
            type: String,
            trim: true,
            require: true,
            maxlength: 2000
        },
        iscorrect4: {
            type: Boolean, 
            default: false 
        },
        answer5: {
            type: String,
            trim: true,
            require: true,
            maxlength: 2000
        },
        iscorrect5: {
            type: Boolean, 
            default: false 
        }
    }
)

module.exports = mongoose.model("Question", questionSchema)