import fastify from './app.js'
import logger from './logger.js'
import envSchema from 'env-schema'

const app = fastify({ logger, pluginTimeout: 50000 })

try {
  const host = process.env.NODE_ENV === 'development' ? '127.0.0.1' : '0.0.0.0'
  const { PORT } = envSchema({
    dotenv: true,
    schema: {
      type: 'object',
      required: ['PORT'],
      properties: {
        PORT: {
          type: 'string',
          default: 3000,
        },
      },
    },
  });

  app.listen({ port: PORT, host })
  console.log(`Server started on ${host}:${PORT}`)
} catch (err) {
  app.log.error(err)
  process.exit(1)
}