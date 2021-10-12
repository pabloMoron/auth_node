'use strict'

import * as compression from "compression"
import * as cors from "cors"
import * as express from "express"
import * as helmet from "helmet"
import * as morgan from "morgan"
import passport from "passport"
import * as path from "path"
import { Config } from "./environment"
import * as routes from './routes'

export function initialize(appConfig: Config): express.Express {
    const app = express.default()

    app.set("port", appConfig.port)

    //Habilitar Cors
    //https://www.youtube.com/watch?v=PNtFSVU-YTI

    const corsOptions: cors.CorsOptions = {
        //habilita origenes especificos
        //origin:["http://localhost:4000", "http://localhost:5000"], 
        origin: ["http://localhost:4000", "http://localhost:5000", "http://127.0.0.1:5511"],
        //origin:"*"
    }
    //Descomentar para habilitar 
    app.use(cors.default(corsOptions))

    //habilita todos los origenes
    //
    //si uso 👉app.use(cors.default());👈 es lo mismo que el caso origin: "*" del objeto corsOptions

    //Muestra por consola informacion de la request
    if (appConfig.logLevel == "debug") {
        app.use(morgan.default("dev"))
    }

    //https://expressjs.com/es/api.html
    //body-parser ha quedado deprecado, usamos lo que nos proporciona express
    //middlewares que parsean el contenido de las requests para los tipos indicados
    app.use(express.urlencoded({ extended: true, limit: "20mb" }))
    app.use(express.json({ limit: "5mb" }))

    // un poco de teoria de middlewares
    //https://www.youtube.com/watch?v=lY6icfhap2o
    //en resumen son porciones de codigo que se ejecutan entre la llegada de una request
    // con next() dentro del middleware definido
    //y el envio de su respuesta con next dentro del procesamiento de la request
    //Es importante el orden en el cual son definidas

    //Descomentar para logear el origen de la url (usado para probar cors)
    app.use(function (req: express.Request, res: express.Response, next: express.NextFunction) {
        console.log(req.header('origin'))
        next()
    })

    //Para comprimir las responses
    app.use(compression.default())

    //Para la validacion de tokens
    // app.use(passport.initialize());
    // app.use(passport.session());

    //Un poco de proteccion...
    app.use(helmet.xssFilter())

    app.use(helmet.noSniff())

    //Quitamos el header
    app.disable("x-powered-by")


    //Configuramos la capeta de estaticos
    app.use(express.static("public", { maxAge: 31557600000 }))

    //Iniciar passport    
    // token.initPassport();

    // Iniciar las rutas
    routes.init(app)

    //Para el manejo de errores, para que los loguee en la consola
    //app.use(error.logErrors);

    //Responder con JSON cuando hay un error 404, sino responde con html
    //Va al final, sino entra primero y no en las rutas
    // app.use(error.handle404);
    return app
}