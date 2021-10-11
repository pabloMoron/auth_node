# Acerca de mi

[Perfil](https://github.com/pabloMoron/profile)

## Acerca de este proyecto
Este es un proyecto personal, que forma parte de mi [portfolio](https://github.com/pabloMoron/profile#portfolio-personal)

### stack
- Entorno windows
- [Node.js®](https://nodejs.org/es/)
- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/es)
- [TypeScript](https://www.typescriptlang.org/)

Dependencias:

dotenv: para tomar variables de entorno desde un archivo .env

express: framework que facilita el routing, uso de middlewares, engines, etc para aplicaciones web.

nodemon: para reiniciar la aplicacion cuando se detecte un cambio en los archivos.

[Deprecado]bodyParser: middleware que permite manipular el body de las requests

[Reemplazado por] el propio middleware incluido en el modulo express
compression: middleware para comprimir las respuestas

cors: libreria para administrar el intercambio de recursos de origenes cruzados (CORS)

helmet: da seguridad para prevenir hacks, previene inyecciones de javascript

morgan: imprime por consola cada request (conviene usar solo en modo debug)

passport: middleware que nos ayuda a validar tokens

passport-jwt: estrategia especifica para passport (hay muchas, cerca de 500)

mongoose: modelador de objetos mongodb para node
