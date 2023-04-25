const Question = require("../models/Question")
const Jobs = require("../models/Job")

exports.createQuestion = async(req,res,next) => {
    try {
        const data = req.body.data;
        const jobId = req.body.jobId;

        data.forEach(async (d) => {
            d.job = jobId
            const q = await Question.create(d);
            if(!q){
                return res.status(400).json({
                    message:"Error occured"
                })
            }
            await Jobs.updateOne({id:jobId},{ $push: { questions: q  } });
        })

        return res.status(200).json({
            message:"Questions added successfully"
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            status: "fail",
            message: error,
        });
    }
}