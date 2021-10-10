'use strict';

import * as compression from "compression";
import * as cors from "cors";
import * as express from "express";
import * as helmet from "helmet";
import * as morgan from "morgan";
import passport from "passport";
import * as path from "path";
import { Config } from "./environment";
import * as routes from './routes'

export function initialize (appConfig: Config): express.Express {
    const app = express.default();
    app.set("port", appConfig.port);

    //Habilitar Cors
    //https://www.youtube.com/watch?v=PNtFSVU-YTI
    //app.use(cors.default());

    //Muestra por consola informacion de la request
    if(appConfig.logLevel=="debug"){
        app.use(morgan.default("dev"));
    }

    //body-parser ha quedado deprecado, usamos lo que nos proporciona express
    app.use(express.urlencoded({extended: true, limit: "20mb"}));
    app.use(express.json({limit: "5mb"}));

    //Para comprimir las responses
    app.use(compression.default());

    //Para la validacion de tokens
    // app.use(passport.initialize());
    // app.use(passport.session());
        
    //Un poco de proteccion...
    app.use(helmet.xssFilter());

    app.use(helmet.noSniff());

    //Quitamos el header
    app.disable("x-powered-by");


    //Configuramos la capeta de estaticos
    app.use(express.static("public", {maxAge: 31557600000}))
    
    //Iniciar passport    
    // token.initPassport();

    // Iniciar las rutas
    routes.init(app);

    //Para el manejo de errores, para que los loguee en la consola
    //app.use(error.logErrors);

    //Responder con JSON cuando hay un error 404, sino responde con html
    //Va al final, sino entra primero y no en las rutas
    // app.use(error.handle404);
    return app;
}