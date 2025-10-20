import send from "../mail/config.cjs"

const mailController = {
  sendMail: async (mail) => {
    return send(mail)
  }
}

export default mailController