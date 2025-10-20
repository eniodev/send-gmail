import { fastify as Fastify } from 'fastify'
import cors from '@fastify/cors'

process.loadEnvFile('.env.prod')

const fastify = (options) => {
    const fastify = Fastify(options)

    fastify.register(cors, {
        origin: '*',
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        allowedHeaders: ['Content-Type'],
        exposedHeaders: ['Content-Disposition'],
        credentials: true,
    });

    fastify.register(import('./services/index.js'), { prefix: '/api' });

    return fastify
}

export default fastify