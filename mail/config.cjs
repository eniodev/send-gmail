const nodemailer = require('nodemailer')

const mailConfig = {
    transporter: () => nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "enioblvck@gmail.com",
            pass: process.env.GOOGLE_APP_PASSWORD,
        }
    }),
    message: {
        from: "enioblvck@gmail.com",
        to: "eniopauloecp@gmail.com",
        subject: "Reminder!",
        text: "!!",
        html: "<p>:)</p>",
    }
}

module.exports = mailConfig
