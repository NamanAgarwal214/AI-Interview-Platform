const Jobs = require("../models/Job")

exports.createJob = async(req,res,next) => {
    try {
        const data = req.body;

        const job = await Jobs.create(data);

        if(job){
            return res.status(200).json({
                message:"Job posted",
                data:job
            })
        }

        return res.status(400).json({
            message:"error in posting question"
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            status: "fail",
            message: error,
        });
    }
}