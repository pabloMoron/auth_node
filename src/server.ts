'use strict'

import * as express from './server/express'
import * as environment from './server/environment'
import { Config } from './server/environment'
import mongoose from 'mongoose'

console.log("Obteniendo variables de entorno...")
const conf: Config = environment.getConfig("develop")
const app = express.initialize(conf)
console.log("Variables de entorno obtenidas")

console.log("Conectandose a la base de datos...")
mongoose.connect(conf.mongoDB)
    .then(() => {
        console.log("MongoDB conectado")
        console.log("Iniciando servidor...")
        app.listen(conf.port, () => {
            console.log(`Server on, listening at port ${conf.port} 🤖 bzz`)
        })
    })
    .catch((err) => {
        console.log("Error al conectar con MongoDB")
        console.log(err.message)
        console.log("No se pudo iniciar la aplicación, el proceso terminará")
        process.exit()
    })