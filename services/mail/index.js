import mailController from "../../controllers/mail.controller.js"

export default async function routes(fastify) {
  fastify.post("/new", async (request, reply) => {
    console.log(request.body)
    const res = await mailController.sendMail(request.body)
    reply.send(res)
  })
}