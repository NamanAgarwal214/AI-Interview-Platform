const mongoose = require('mongoose')
const Schema = mongoose.Schema
const validator = require("validator")
const bcrypt = require("bcrypt")

const CompanySchema = new Schema({
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
      companyLogo:{
        type:String
      },
      companyCertificate:{
        type:String
      },
      isVerified:{
        type:Boolean,
        default: false
      },
      emailVerified:{
        type:Boolean,
        default: false
      },
      verifyCode:{
        type:Number
      }
},{
    timestamps: true
})

CompanySchema.pre("save", async function (next) {
    if (!this.password) next();
    this.password = await bcrypt.hash(this.password, 12);
    next();
  });
  
  CompanySchema.methods.correctPassword = async function (
    candidatePassword,
    adminPassword
  ) {
    return await bcrypt.compare(candidatePassword, adminPassword);
  };

module.exports = mongoose.model('Company', CompanySchema)