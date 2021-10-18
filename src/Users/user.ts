"use strict"

import {hashSync} from 'bcrypt'
import { Document, model, Schema } from 'mongoose'
import * as env from '../server/environment'

const conf = env.getConfig('develop')

export interface IUser extends Document {
    name: string,
    user: string,
    password: string,
    permissions: string[],
    updated: Date,
    created: Date,
    enabled: boolean,
    
}

//  Declaramos el schema
//  Documentacion acerca de los esquemas en mongoose
//  https://mongoosejs.com/docs/guide.html#schemas

const UserSchema = new Schema({
    name:{
        type: String,
        trim: true,
        required: [true, "Name is required"],
    },

    user:{
        type: String,
        trim: true,
        unique: true,
        required: [true, "User is required"]
    },

    password:{
        type: String,
        required: [true, "Password is required"],
        minlength: 4
    },
    
    permissions: {
        type: [
            {
                type: String
            }
        ],
        default:["User"]
    },

    updated: {
        type: Date,
        required: [true, "Updated is required"],
        default: Date.now(),
    },

    created:{
        type: Date,
        required: [true, "Created is required"],
        default: Date.now(),
    },

    enabled:{
        type: Boolean,
        default: true,

    }
}, {collection: "Users"})

//  Validacion de longitud de password
UserSchema.path("password").validate((password: string)=>{
    return password && password.length > 4
}, "Password should contain at least 4 characters")

//  Aplica una funcion hash a un password
UserSchema.methods.hashPassword = (password: string): string => {
    return hashSync(password, conf.passwordSalt)
}

//  Asigna una lista de permisos a un usuario
UserSchema.methods.grant = function (permissions : string[]): void  {
    permissions.forEach((permission)=>{
        if (!this.permissions.includes(permission)) this.permissions.push(permission)
    })
}

//  Quita permisos a un usuario
UserSchema.methods.revoke = function (permissions: string[]): void {
    permissions.forEach((permission:string, index: number)=>{
        if(this.permission.include(permission)) this.permissions.splice(index,1) 
    })
}

//  Verifica si tiene un permiso
UserSchema.methods.hasPermission = function (permission: string):boolean{
    return this.permission.include(permission)
}

//  Autentica la contraseña de un usuario
UserSchema.methods.authenticate = function (password: string): boolean{
    return this.password && this.password === this.hashPassword(password)
}

//  Actualiza el password de un usuario
UserSchema.methods.setPassword = function (password: string): void{
    this.password = this.hashPassword(password)
    this.updated = Date.now()
}

export const User = model<IUser>("User", UserSchema)