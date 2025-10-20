import mailConfig from "../mail/config.cjs"

const mailController = {
  sendMail: async () => {
    return mailConfig.message;await mailConfig.transporter.sendMail(mailConfig.message)
  }
}

export default mailController