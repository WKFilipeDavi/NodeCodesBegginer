//módulos nativos
const path = require('path');

console.log(path.basename(__filename));
console.log('Extensão do arquivo: ' + path.extname(__filename));

//Meus módulos
const myModule = require('./export.js');
console.log('meu modulo: ' + myModule);