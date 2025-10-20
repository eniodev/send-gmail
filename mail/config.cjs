const nodemailer = require('nodemailer')

const credentials = {
    user: process.env.GOOGLE_EMAIL,
    pass: process.env.GOOGLE_APP_PASSWORD,
}

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: credentials
})

const send = async (mail) => {
    try {
        const info = await transporter.sendMail({
            from: credentials.user,
            ...mail
        })

        console.log(`Message sent: %s", ${info.messageId} \nPreview URL: %s", ${nodemailer.getTestMessageUrl(info)}`)
    } catch (err) {
        console.error('Error while sending mail', err)
    }
}

module.exports = send
