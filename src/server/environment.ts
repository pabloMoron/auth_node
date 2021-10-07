import * as dotenv from 'dotenv';
let config: Config;
let defaultSecret = "lxoixvHSl4DEswmF1WM1EA6v/Uk3ZG9ERInnRzpB6ny5yEMYIXgkGcNyN1zp4Vk3pFSSsAyo4w7KITUT8RxR79bWjWQqLmGcvrIzgcse2L00lGgdi97baK+2d1tzhyULCPSjgqF0Sr271eJjGfHs4LDkL8pBFvwAcr7olnm3bZ8ggmsmm26sdDuVb809gZMfo8CTWZPC/6vaj2g5cXS5WwQVWqhZRnBSGD6Ijv1FD6t/H8Ub/xWu9bLX1cHVZChhkKTQelHA7B9bCaj/c0Tp+q2Hcgd1/8+9X3/roCvT9v8GM3BM8g/Darc6+7iTt0XdI3dmQuLH7iITwUQ2YzNpew==";
///environment: 'local' | 'develop' | 'qa' | 'production' | ...
export function getConfig(environment: string) {
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
        };
    }
    return config;
}

export interface Config{
    port: string,
    logLevel: string, //'debug' | 'verbose' | 'info' | 'warn' | 'error'
    mongoDB: string,
    passwordSalt: string,
    jwtSecret: string,
    rabbitUrl: string

    host: string
}