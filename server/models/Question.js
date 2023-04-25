const mongoose = require('mongoose')
const Schema = mongoose.Schema

const QuestionSchema = new Schema({
    question:{
        type:String
    },
    expectedAnswer:{
        type:String
    },
    job:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Job"
    }
},{
    timestamps: true
})

module.exports = mongoose.model('Question', QuestionSchema)