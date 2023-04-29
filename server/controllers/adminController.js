const Admin = require("../models/Admin");
const Applicant = require("../models/Applicant");
const Company = require("../models/Company");
const Job = require("../models/Job");
const Question = require("../models/Question");
const { createSendToken } = require("../utils/auth");
const { getSignUrlForFile } = require("../utils/s3");
const jwt = require("jsonwebtoken");

exports.registerAdmin = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const admin = await Admin.findOne({ email });

    if (admin) {
      return res.status(400).json({
        message: "Already existed",
      });
    }

    const new_admin = await Admin.create({ email, password });
    createSendToken(new_admin, 200, res);
    // res.status(200).json({
    //   message: "Admin created successfully",
    //   user: new_admin,
    // });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: "fail",
      message: error,
    });
  }
};

exports.loginAdmin = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(500).json({
        status: "fail",
        message: "Please provide Email and password",
      });
    }

    let admin = await Admin.findOne({ email });
    if (!admin) {
      return res.status(401).json({
        status: "fail",
        message: `Incorrect email or password`,
      });
    }

    const correct = await admin.correctPassword(password, admin.password);

    console.log(correct);

    if (!correct) {
      return res.status(401).json({
        status: "fail",
        message: `Incorrect email or password`,
      });
    }
    createSendToken(admin, 200, res);
  } catch (error) {
    console.log(error);
    res.status(404).json({
      status: "fail",
      message: error,
    });
  }
};

exports.companyDetails = async (req, res, next) => {
  try {
    let companies = await Company.find({}).populate("jobs");

    for (let i = 0; i < companies.length; i++) {
      let companyLogo = await getSignUrlForFile(companies[i].companyLogo);
      companies[i].companyLogo = companyLogo.signedUrl;

      let companyCertificate = await getSignUrlForFile(
        companies[i].companyCertificate
      );
      companies[i].companyCertificate = companyCertificate.signedUrl;
    }

    res.status(200).json({
      message: "Companies are",
      data: companies,
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({
      status: "fail",
      message: error,
    });
  }
};

exports.jobDetails = async (req, res, next) => {
  try {
    const { id } = req.query;
    const job = await Job.findById(id).lean();
    job.questions = await Question.find({ job: id });
    job.applicants = await Applicant.find({ job: id });

    res.status(200).json({
      message: "Job",
      data: job,
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({
      status: "fail",
      message: error,
    });
  }
};

exports.verifyCompany = async (req, res, next) => {
  try {
    const { id } = req.query;
    const company = await Company.findByIdAndUpdate(
      id,
      { isVerified: true },
      { new: true }
    );
    res.status(200).json({
      message: "Company Verified",
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({
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
    const currentUser = await Admin.findById(decoded.id);

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
