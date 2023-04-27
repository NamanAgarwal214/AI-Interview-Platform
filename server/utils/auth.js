const jwt = require("jsonwebtoken");
const crypto = require("crypto");


const signToken = (data) => {
    return jwt.sign(data, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN,
    });
};

const createSendToken = (user, statusCode, res) => {
    const { id } = user;
    const data = {
        id
    };
    const token = signToken(data);

    return res.status(statusCode).json({
        status: "success",
        token,
        user,
    });
};

module.exports = {createSendToken}