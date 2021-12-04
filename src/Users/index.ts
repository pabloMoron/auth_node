'use strict'
/**
 * Resolución de módulos
 * https://www.typescriptlang.org/docs/handbook/module-resolution.html#how-nodejs-resolves-modules
 * Un módulo se puede resolver de 3 maneras:
 * 
 * 1-Pedir un archivo expecifico /root/src/moduloA.js
 * 
 * 2-Pedir un directorio /root/src/moduloB y que el directorio contenga un archivo package.json que especifique un módulo "principal".
 * En este ejemplo, si Node.js encuentra el archivo /root/src/moduloB/package.json y contiene { "main": "lib/moduloPrincipal.js" },
 * entonces Node.js hará referencia a /root/src/moduloB/lib/moduloPrincipal.js.
 * 
 * 3-Pedir un directorio /root/src/moduloC y si la directorio contiene un archivo llamado index.js
 * se considera implícitamente este archivo como módulo "principal"
 * Este caso sería aplica a este archivo 👆
 * 
 * Los casos 2 y 3 re-exportan todas los archivos del directorio
 */
export {
    createUser,
    changePassword,
}from './services'

export{
    IUser,
    User
}from './user'