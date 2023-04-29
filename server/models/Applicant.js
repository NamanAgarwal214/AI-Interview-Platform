const mongoose = require('mongoose')
const Schema = mongoose.Schema
const validator = require("validator")
const bcrypt = require("bcrypt")

const ApplicantSchema = new Schema({
    name: {
        type: String,
      },
      email: {
        type: String,
        unique: true,
        validator: [validator.isEmail, "Please provide a valid email"],
        lowercase: true,
      },
      address: {
        type: String,
      },
      password: {
        type: String,
        required: [true, "Please provide a password"],
      },
      resume:{
        type:String
      },
      job:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Job"
      }],
      solutions:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Solution"
      }]
},{
    timestamps: true
})

ApplicantSchema.pre("save", async function (next) {
    if (!this.password) next();
    this.password = await bcrypt.hash(this.password, 12);
    next();
  });
  
  ApplicantSchema.methods.correctPassword = async function (
    candidatePassword,
    adminPassword
  ) {
    return await bcrypt.compare(candidatePassword, adminPassword);
  };

module.exports = mongoose.model('Applicant', ApplicantSchema)