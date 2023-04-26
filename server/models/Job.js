const mongoose = require('mongoose')
const Schema = mongoose.Schema

const JobSchema = new Schema({
    title:{
        type:String,
        required:true
    },
    company:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Company"
    },
    desciption:{
        type:String
    },
    duration:{
        type:Number
    },
    questions:[{
        type:mongoose.Schema.Types.ObjectId,
        req:"Question"
    }],
    applicants:[{
        type:mongoose.Schema.Types.ObjectId,
        req:"Applicant"
    }]
},{
    timestamps: true
})

module.exports = mongoose.model('Job', JobSchema)