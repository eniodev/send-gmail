import mailController from "../../controllers/mail.controller.js"

export default async function routes(fastify) {
  fastify.get("/new", async (request, reply) => {
    const res = await mailController.sendMail(request.body)
    reply.send(res)
  })
}