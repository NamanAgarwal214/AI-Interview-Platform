const mongoose = require('mongoose')
const Schema = mongoose.Schema
const validator = require("validator")
const bcrypt = require("bcrypt")

const AdminSchema = new Schema({
      email: {
        type: String,
        unique: true,
        validator: [validator.isEmail, "Please provide a valid email"],
        lowercase: true,
      },
      password: {
        type: String,
        required: [true, "Please provide a password"],
      }
},{
    timestamps: true
})

AdminSchema.pre("save", async function (next) {
    if (!this.password) next();
    this.password = await bcrypt.hash(this.password, 12);
    next();
  });
  
  AdminSchema.methods.correctPassword = async function (
    candidatePassword,
    adminPassword
  ) {
    return await bcrypt.compare(candidatePassword, adminPassword);
  };

module.exports = mongoose.model('Admin', AdminSchema)