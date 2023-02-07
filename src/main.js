require('dotenv').config();
const nodemailer = require("nodemailer");

(async function run() {
    console.log('running');

    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
            user: process.env.MAIL_USER_EMAIL, // generated ethereal user
            pass: process.env.MAIL_USER_PASSWORD, // generated ethereal password
        },
    });

    await transporter.sendMail({
        from: process.env.MAIL_FROM, // sender address
        to: process.env.MAIL_TO, // list of receivers
        subject: "Daily Report", // Subject line
        text: `
            Daily Report 
        `,
        html: `
            <h1> Daily Report </h1>
        `
    });
})();