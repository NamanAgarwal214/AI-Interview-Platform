const nodemailer = require('nodemailer');
const pug = require("pug");

const sendEmail = async options => {
    // 1) Create a transporter
    let testAccount = await nodemailer.createTestAccount();

    console.log(options);

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        service: "Gmail",
        auth: {
            user: process.env.EMAIL, 
            pass: process.env.PASSWORD, 
        },
        from: "agromart020@gmail.com",
        tls: {
            rejectUnauthorized: false
        }
    });

    const html = pug.renderFile(`${__dirname}/../views/${options.html}.pug`,{
        message:options.message,
        email:options.email
    });
    

    // 2) Define the email options
    const mailOptions = {
        from: 'Intellihire Support<agromart020@gmail.com>',
        to: options.email,
        subject: options.subject,
        // text: options.message
        html: html
    };

    // 3) Actually send the email
    await transporter.sendMail(mailOptions);
};

module.exports = sendEmail;