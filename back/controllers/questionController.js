const formidable = require("formidable");
const _ = require("fs");

const Question = require("../models/Question");
const { errorHandler } = require("../helpers/dberrorHandler");

exports.create = (req, res) => {
    let form = new formidable.IncomingForm();
    form.keepExtensions = true;
    form.parse(req, (err, fields, files) => {
        if (err) {
            return res.status(400).json({
                error: "Parsing data failed"
            })
        }
        const {question, answer1, iscorrect1, answer2, iscorrect2, answer3, iscorrect3, answer4, iscorrect4, answer5, iscorrect5} = fields;
        let question_new = new Question(fields);
        question_new.save((err, result) => {
            if (err){
                return res.status(400).json({
                    error: errorHandler(error)
                })
            }
            res.json(result);
        })
    })
}

exports.list = (req, res) => {
    let order = req.query.order ? req.query.order : "asc"
    let sortBy = req.query.sortBy ? req.query.sortBy : "question"

    Question.find()
        .sort([[sortBy, order]])
        .exec((err, questions) => {
            if (err) {
                return res.status(400).json({
                    error: "Questions not found"
                })
            }
            res.json(questions);
        })
}

exports.remove = (req, res) => {
    let question = req.question
    question.remove((err, deletedQuestion) => {
        if (err) {
            return res.status(400).json({
                error: errorHandler(err)
            })
        }
        res.json({
            message: "Question succesfully deleted"
        })
    })
}

exports.questionById = (req, res, next, id) => {
    Question.findById(id)
        .exec((err, question) => {
            if(err || !question){
                return res.status(400).json({
                    error: "Question not found or does not exists"
                });
            }
            req.question = question;
            next();
        })
}