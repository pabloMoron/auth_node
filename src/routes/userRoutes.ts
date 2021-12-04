'use strict'

import * as express from 'express'
import * as user from '../Users'

const userRouter = express.Router()
function prevMiddleware(req: express.Request, res: express.Response, next: express.NextFunction): void {
    console.log("Prev Middleware")
    next()
}
function postMiddleware(req: express.Request, res: express.Response, next: express.NextFunction): void {
    console.log("Post Middleware")
    next()
}

export function initUserRouter(app: express.Express): void {
    //como la ruta es igual, express ofrece la posibilidad de usar el metodo
    //route() y appendear las funciones que van a atenerder cada uno de los verbos
    //para esa ruta... muy util cuando se implementan todos los metodos de una ruta
    userRouter.route('/')
    .get(prevMiddleware, listUsers, postMiddleware)
    .post(signUp)

    userRouter.post('/password', changePassword)
    userRouter.post('/login', login)
    userRouter.post('/logout', logout)
    userRouter.get('/grant', grantPermissions)
    userRouter.get('/revoke', revokePermissions)
    userRouter.get('/enable', enableUser)
    userRouter.get('/disable', disableUser)
    userRouter.get('/current', current)

    app.use('/users', userRouter)
}

function listUsers(req: express.Request, res: express.Response, next: express.NextFunction): void {
    console.log('Atiendo al request')
    res.send('lista de users')
    next()
}

function signUp(req: express.Request, res: express.Response): void {
    console.log('alta de nuevo usuario')
    const usr: user.IUser = new user.User()

    usr.name = req.body.name
    usr.user = req.body.user
    usr.setPassword(req.body.password)
    //usr.password = "12345"
    usr.save(error =>{
        if(error) { 
            res.json({status: 500, error: error})
            return
        }
        res.json({status: 201, user: usr})
    })
}

function changePassword(req: express.Request, res: express.Response): void {
   try {
       const userId:string = req.body.userId
       const actualPassword:string = req.body.actualPassword
       const newPassword:string = req.body.newPassword
       user.changePassword(userId, actualPassword, newPassword)
       res.json({status: 200, user: user})
   } catch (error) {
       res.json({status: 200, error: error})
   }
}

function login(req: express.Request, res: express.Response): void {
    res.send('inicio sesion')
}

function logout(req: express.Request, res: express.Response): void {
    res.send('cerrar sesion')
}

function grantPermissions(req: express.Request, res: express.Response): void {
    res.send('otorga permisos')
}

function revokePermissions(req: express.Request, res: express.Response): void {
    res.send('quita permisos')
}

function enableUser(req: express.Request, res: express.Response): void {
    res.send('habilita usuario')
}

function disableUser(req: express.Request, res: express.Response): void {
    res.send('deshabilita usuario')
}

function current(req: express.Request, res: express.Response): void {
    res.send('detalles del usuario actual')
}