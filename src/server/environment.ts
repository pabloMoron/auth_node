import * as dotenv from 'dotenv'
let config: Config
///environment: 'local' | 'develop' | 'qa' | 'production' | ...
export function getConfig(environment: string): Config {
    if (!config) {
        dotenv.config({ path: `${environment}.env` })
        config = {
            host: process.env.HOST || 'localhost',
            jwtSecret: process.env.JWT_SECRET || 'eKlSZc+piPhPOC5GXhmfQJH56ySX6TOK4HSGIKBg9DpoQ/PdKpQ',
            logLevel: process.env.LOG_LEVEL || 'debug',
            mongoDB: process.env.MONGO_URL || 'mongodb://localhost/authentication',
            passwordSalt: process.env.PASSWORD_SALT || 'BYe4Zrdt6KEfBPirPguS9l8SbBbeLBnvrgYdJDe8',
            port: process.env.PORT || '3000',
            rabbitUrl: process.env.RABBIT_URL || 'amqp://localhost',
        }
    }
    return config
}

export interface Config {
    port: string,
    logLevel: string, //'debug' | 'verbose' | 'info' | 'warn' | 'error'
    mongoDB: string,
    passwordSalt: string,
    jwtSecret: string,
    rabbitUrl: string

    host: string
}