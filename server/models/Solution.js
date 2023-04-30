const mongoose = require('mongoose')
const Schema = mongoose.Schema

const SolutionSchema = new Schema({
    applicant:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Applicant"
    },
    job:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Job"
    },
    questions:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Question"
    }],
    solutionVideos:[],
    solutionTexts:[],
    solutionScore:[]
},{
    timestamps: true
})

module.exports = mongoose.model('Solution', SolutionSchema)