const Applicant = require("../models/Applicant");
const Job = require("../models/Job");
const { createSendToken } = require("../utils/auth");
const { uploadFile, getSignUrlForFile, downloadVideo } = require("../utils/s3");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const Solution = require('../models/Solution')
const { PythonShell } = require('python-shell');


const axios = require("axios");
const fs = require("fs");
const Question = require('../models/Question');

exports.loginApplicant = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(500).json({
        status: "fail",
        message: "Please provide Email and password",
      });
    }

    const applicant = await Applicant.findOne({ email }).populate("job");
    if (!applicant) {
      return res.status(401).json({
        status: "fail",
        message: `Incorrect email or password`,
      });
    }
    console.log(applicant);

    const correct = await applicant.correctPassword(
      password,
      applicant.password
    );

    console.log(correct);

    if (!correct) {
      return res.status(401).json({
        status: "fail",
        message: `Incorrect email or password`,
      });
    }
    createSendToken(applicant, 200, res);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: "fail",
      message: error,
    });
  }
};

exports.editProfile = async (req, res, next) => {
  try {
    const id = req.user.id;
    const body = req.body;

    console.log(id);

    if (req.body.resume) {
      const file_name_resume = `/Resume/${Date.now()}_resume_${
        req.user.name
      }.pdf`;
      const file_type_resume = req.body.file_type_resume;

      const base64StringResume = req.body.resume.replace(
        /^data:application\/\w+;base64,/,
        ""
      );
      const buffResume = Buffer.from(base64StringResume, "base64");

      await uploadFile(buffResume, file_name_resume, file_type_resume);

      req.body.resume = file_name_resume;
    }

    const user_updated = await Applicant.findByIdAndUpdate(id, body, {
      new: true,
    });

    return res.status(200).json({
      message: "Profile updated",
      data: user_updated,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: "fail",
      message: error,
    });
  }
};

exports.authPass = async (req, res, next) => {
  // 1) Getting token and check of it's there
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = await req.headers.authorization.split(" ")[1];
  }

  if (!token || token === "null") {
    return res.status(200).json({
      message: "You aren't Logged In",
    });
  }

  // 2) Verification token
  let decoded;
  try {
    decoded = await jwt.verify(token, process.env.JWT_SECRET);
  } catch (e) {
    if (e instanceof jwt.JsonWebTokenError) {
      return res.status(200).json({
        status: "fail",
        message: "Session expired",
      });
    }
    return res.status(200).json({
      status: "fail",
      message: "An error occured",
    });
  }
  // console.log("My decoded", decoded);
  // GRANT ACCESS TO PROTECTED ROUTE
  // 3) Check if user still exists
  // console.log(decoded);
  try {
    const currentUser = await Applicant.findById(decoded.id);

    // 4) Check if user changed password after the token was issued

    req.user = currentUser;
    // console.log("This is req.user from middlwwRE", req.user);
    res.locals.user = currentUser;
    console.log("Successfully Passed Middlware");
    next();
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      status: "fail",
      message: err.message,
    });
  }
};

exports.startQuiz = async (req, res, next) => {
    try {
        const { job } = req.body;
        const user = req.user.id;
        console.log(req.user)
        const jobDetails = await Job.findOne({
            _id: job,
            applicants: { $in: user }
        });

        console.log(jobDetails)
        if (!jobDetails) {
            return res.status(401).json({
                message: "User cannot access the quiz"
            })
        }

        const questions = jobDetails.questions

        const solve = await Solution.create({
            job,
            applicant: user,
            questions
        });

        if (solve) {
            await Applicant.findByIdAndUpdate(user,{ $push: { solutions: solve } })
            return res.status(200).json({
                message: "Start the quiz",
                data: solve
            })
        }

        return res.status(400).json({
            message: "Error occured"
        })


    } catch (error) {
        console.log(error);
        res.status(500).json({
            status: "fail",
            message: error,
        });
    }
};

async function transcribe() {
    const path = require("path");
    const FormData = require("form-data");
    const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
    const filePath = path.join('temp', "down.mp4");
    const model = "whisper-1";
    const formData = new FormData();
    formData.append("model", model);
    formData.append("file", fs.createReadStream(filePath));

    const result = await axios
        .post("https://api.openai.com/v1/audio/transcriptions", formData, {
            headers: {
                Authorization: `Bearer ${OPENAI_API_KEY}`,
                "Content-Type": `multipart/form-data; boundary=${formData._boundary}`
            }
        })


    return result.data.text;
}

exports.submitVideo = async (req, res, next) => {
    try {
        let { solution, solutionVideo, question } = req.body

        const solve = await Solution.findById(solution);
        if (!solve) {
            return res.status(400).json({
                message: "No such quiz exist"
            })
        }

        const base64String = solutionVideo.replace(/^data:video\/\w+;base64,/, "");
        const buffVideo = Buffer.from(base64String, "base64");

        const file_name = `/${solution}/${req.user.id}/${question}`
        const file_type = req.body.file_type;

        await uploadFile(buffVideo, file_name, file_type)
        solutionVideo = file_name

        await downloadVideo(solutionVideo);
        

        // console.log(score);
        await Solution.findByIdAndUpdate(solution, { $push: { solutionVideos: solutionVideo } }, { new: true })

        res.json({
            message: "Answer Submited"
        })


    } catch (error) {
        console.log(error);
        res.status(500).json({
            status: "fail",
            message: error,
        });
    }
}

exports.evaluateScore = async (req, res, next) => {
    try {
        let { solution, question } = req.body

        const q = await Question.findById(question)
        // console.log(q)

        const solutionText = await transcribe();
        console.log(solutionText)
        // // fs.unlinkSync(writeStream.writeStream);

        let options = {
            mode: 'text',
            pythonOptions: ['-u'], // get print results in real-time
            args: [q.question,q.expectedAnswer,solutionText] //An argument which can be accessed in the script using sys.argv[1]
        };
        let score;
        await PythonShell.run('service.py', options).then(message => {
            console.log(message[0])
            let similarityScore = Number(message[0].split(" ")[1])/Number(message[0].split(" ")[0])
            score = similarityScore
        });

        await Solution.findByIdAndUpdate(solution,{ $push: { solutionTexts: solutionText } })
        await Solution.findByIdAndUpdate(solution,{ $push: { solutionScore: score } })

        // console.log(score)
        return  res.status(200).json({
            message:"Evaluated",
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            status: "fail",
            messexpected_answer: error,
        });
    }
}
