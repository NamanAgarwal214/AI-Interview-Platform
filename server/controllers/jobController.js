const Jobs = require("../models/Job")
const sendEmail = require("../utils/email");
const Applicant = require('../models/Applicant')

exports.createJob = async (req, res, next) => {
    try {
        const data = req.body;
        data.company = req.user.id;

        const job = await Jobs.create(data);

        if (job) {
            return res.status(200).json({
                message: "Job posted",
                data: job
            })
        }

        return res.status(400).json({
            message: "error in posting question"
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            status: "fail",
            message: error,
        });
    }
}

exports.addApplicants = async (req, res, next) => {
    try {
        const data = req.body.data;
        data.forEach(async (d) => {
            const old_user = await Applicant.findOne({email:d.email});
            if(old_user){
                const message = `Congrats on being shortlisted!`
                await sendEmail({
                    email: d.email,
                    subject: "Shortlisted for interview",
                    message,
                })
                await Applicant.updateOne({email:d.email},{ $push: { job: req.body.job } });
                await Jobs.updateOne({id:req.body.job},{ $push: { applicants: old_user } });
            }else{
                d.password = `${d.name.split(" ").join()}@1234`
                d.job = [req.body.job]
                const message = `Congrats on being shortlisted!Your email and password for Job is ${d.email} and pass is ${d.password}`
    
                await sendEmail({
                    email: d.email,
                    subject: "Login Creds",
                    message,
                })
    
                const app = await Applicant.create(d)
                if(!app){
                    return res.status(400).json({
                        message:`Failed to add applicant ${d.email}`
                    })
                }
                await Jobs.updateOne({id:d.job},{ $push: { applicants: app } });
            }
        })

        return res.status(200).json({
            message:"All applicants added"
        })


    } catch (error) {
        console.log(error);
        res.status(500).json({
            status: "fail",
            message: error,
        });
    }
}