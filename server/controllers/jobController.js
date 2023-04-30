const Jobs = require("../models/Job");
const sendEmail = require("../utils/email");
const Applicant = require("../models/Applicant");
const Company = require("../models/Company");

exports.createJob = async (req, res, next) => {
  try {
    const data = req.body;
    data.company = req.user.id;

    const job = await Jobs.create(data);

    if (job) {
      await Company.findByIdAndUpdate(req.user.id, { $push: { jobs: job } });
      return res.status(200).json({
        message: "Job posted",
        data: job,
      });
    }

    return res.status(400).json({
      message: "error in posting question",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: "fail",
      message: error,
    });
  }
};

exports.addApplicants = async (req, res, next) => {
  try {
    const data = req.body.data;
    const job = await Jobs.findById(req.body.job);
    const company = await Company.findById(job.company)
    data.forEach(async (d) => {
      const old_user = await Applicant.findOne({ email: d.email });
      console.log(d.email)
      if (old_user) {
        const message = {
            name:old_user.name,
            role: job.title,
            company: company.name
        };
        const html = "shortlist"
        await sendEmail({
          email: d.email,
          subject: "Shortlisted for interview",
          html,
          message
        });
        await Applicant.updateOne(
          { email: d.email },
          { $push: { job: req.body.job } }
        );
        await Jobs.updateOne(
          { id: req.body.job },
          { $push: { applicants: old_user } }
        );
      } else {
        d.password = `${d.name.split(" ").join()}@1234`;
        d.job = [req.body.job];
        
        const app = await Applicant.create(d);
        const html = "welcome"
        const message = {
            name:app.name,
            password:d.password,
            role: job.title,
            company: company.name
        };

        await sendEmail({
          email: d.email,
          subject: "Login Creds",
          html,
          message
        });

        if (!app) {
          return res.status(400).json({
            message: `Failed to add applicant ${d.email}`,
          });
        }
        await Jobs.updateOne(
          { id: req.body.job },
          { $push: { applicants: app } }
        );
      }
    });

    return res.status(200).json({
      message: "All applicants added",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: "fail",
      message: error,
    });
  }
};
