module.exports = {
  parser: '@typescript-eslint/parser',  // especifica el parser para ESLint
  extends: [
    'plugin:@typescript-eslint/recommended',  // este plugin ya configura las reglas recomendadas
  ],
  parserOptions: {
    ecmaVersion: 2020,  // permite el parseo de los features de ECMAScripts modernos
    sourceType: 'module',  // permite el uso de imports
  },

  rules: {
    //se deshabilitan los punto y coma
    "semi": ["error", "never"],
    
    //se fuerza a declarar el tipo de dato que devuelven las funciones
    //https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/explicit-function-return-type.md
    "@typescript-eslint/explicit-function-return-type": "off",
  },
  "overrides": [
    {
      // habilita las reglas para los archivos .ts y .tsx, no los .js ni .jsx
      "files": ["*.ts", "*.tsx"],
      "rules": {
        "@typescript-eslint/explicit-function-return-type": ["error"]
      }
    }
  ]
}