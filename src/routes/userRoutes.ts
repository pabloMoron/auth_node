'use strict';

import * as express from 'express';

const userRouter = express.Router();
function prevMiddleware(req: express.Request,res: express.Response, next: express.NextFunction) {
    console.log("Prev Middleware");
    next();
}
function postMiddleware(req: express.Request,res: express.Response, next: express.NextFunction) {
    console.log("Post Middleware");
    next();
}

export function initUserRouter(app: express.Express){
    //como la ruta es igual, express ofrece la posibilidad de usar el metodo
    //route() y appendear las funciones que van a atenerder cada uno de los verbos
    //para esa ruta... muy util cuando se implementan todos los metodos de una ruta
    userRouter.route('/').get(prevMiddleware,listUsers,postMiddleware).post(signUp);

    userRouter.post('/password', changePassword);
    userRouter.post('/login', login);
    userRouter.post('/logout', logout);
    userRouter.get('/grant', grantPermissions);
    userRouter.get('/revoke', revokePermissions);
    userRouter.get('/enable', enableUser);
    userRouter.get('/disable', disableUser);
    userRouter.get('/current', current);

    app.use('/users', userRouter);
}

function listUsers(req: express.Request,res: express.Response, next: express.NextFunction) {
    res.send('lista de users');
    next();
}

function signUp (req: express.Request,res: express.Response) {
    res.send('alta de un nuevo usuario');
}

function changePassword(req: express.Request, res: express.Response){
    res.send('cambio de contraseña');
}

function login (req: express.Request, res: express.Response){
    res.send('inicio sesion');
}

function logout (req: express.Request, res: express.Response){
    res.send('cerrar sesion');
}

function grantPermissions (req: express.Request, res: express.Response){
    res.send('otorga permisos');
}

function revokePermissions (req: express.Request, res: express.Response){
    res.send('quita permisos');
}

function enableUser(req: express.Request, res: express.Response){
    res.send('habilita usuario');
}

function disableUser(req: express.Request, res: express.Response){
    res.send('deshabilita usuario');
}

function current(req: express.Request, res: express.Response){
    res.send('detalles del usuario actual');
}