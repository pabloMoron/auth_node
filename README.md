# Acerca de mi 
[Perfil](https://github.com/pabloMoron/profile)

<!-- ![](./public/nerdge_md.gif) -->

## Acerca de este proyecto
Este es un proyecto personal, que forma parte de mi [portfolio](https://github.com/pabloMoron/profile#portfolio-personal).
A medida que vaya avanzando con el código iré completando el README.
### Ide
- [VSCode](https://code.visualstudio.com/)
### Extensiones para VSCode
- [Rest Client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client): Utilizo esta extensión para probar los endpoints de mi API desde un archivo .rest.

- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint): Para intgrar ESLint en VSCode.

- [TypeScript Debugger](https://marketplace.visualstudio.com/items?itemName=kakumei.ts-debug): Para poder debuggear código typescript desde la transpilacion.
La opcion la opción "sourcemap" debe estar con el valor true en el archivo tsconfig.json.

### Stack
- Entorno windows
- [Node.js®](https://nodejs.org/es/)
- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/es)
- [TypeScript](https://www.typescriptlang.org/)

Dependencias:

- [dotenv](https://www.npmjs.com/package/dotenv): Para tomar variables de entorno desde un archivo .env.

- [Express](https://expressjs.com/): framework que facilita el routing, uso de middlewares, engines, etc para aplicaciones web.

- [nodemon](https://www.npmjs.com/package/nodemon): para reiniciar la aplicacion cuando se detecte un cambio en los archivos.

- [Deprecado] ~~bodyParser~~: middleware que permite manipular el body de las requests.

- [Reemplazado por] el propio [middleware](https://expressjs.com/en/resources/middleware/body-parser.html) incluido en el modulo express.

- [compression](http://expressjs.com/en/resources/middleware/compression.html): middleware para comprimir las respuestas.

- [cors](http://expressjs.com/en/resources/middleware/cors.html): middleware de Express para administrar el intercambio de recursos de origenes cruzados (CORS).

- [helmet](http://expressjs.com/en/advanced/best-practice-security.html#use-helmet): da seguridad para prevenir hacks, previene inyecciones de javascript.

- [morgan](https://www.npmjs.com/package/morgan): imprime por consola cada request (usado solo en modo desarrollo).

- [passport](https://www.passportjs.org/): middleware que nos ayuda a validar tokens.

- [passport-jwt](https://www.passportjs.org/packages/passport-jwt/): estrategia especifica para passport (hay muchas, cerca de 500).

- [mongoose](https://mongoosejs.com/): modelador de objetos de mongodb para node.

- [bcrypt](https://www.npmjs.com/package/bcrypt): para hacer un hash seguro de las passwords

Nota: [¿Por qué usar bcrypt y no el modulo crypto de node?](https://codahale.com/how-to-safely-store-a-password/)
### Linter y plugin respectivo para typescript. TSLint se encuentra deprecado en favor a ESLint. [Mas info](https://blog.palantir.com/tslint-in-2019-1a144c2317a9)
- eslint
- @typescript-eslint/parser 
- @typescript-eslint/eslint-plugin

