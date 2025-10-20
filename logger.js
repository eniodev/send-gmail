import fs from 'fs'

const logDir = './logs'

if (!fs.existsSync(logDir)) {
    fs.mkdirSync(logDir, { recursive: true })
}

const logger =
    process.env.NODE_ENV === 'production'
        ? {
            transport: {
                target: 'pino-pretty',
                options: {
                    translateTime: 'HH:MM:ss.l',
                    ignore: 'pid,hostname',
                },
            },
        }
        : {
            level: 'warn',
            file: logDir + '/warn-logs.log',
        };

    export default logger