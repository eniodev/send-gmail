export default async function routes(fastify) {
  fastify.register(import("./mail/index.js"), { prefix: "/mail" })
}