'use strict';

import * as express from 'express';
import * as passport from 'passport'
import {initUserRouter} from '../routes/userRoutes'
//Aqui se pueden importar otros routers

export function init(app: express.Express){
    app.get("/", (req, res, next)=>{ res.redirect("../index.html"); });
    initUserRouter(app);
    //Aqui se puede iniciar otros routers
}