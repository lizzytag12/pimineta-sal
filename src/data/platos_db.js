const fs = require('fs');
const path = require('path');

const datos= fs.readFileSync(path.join(__dirname,'platos.json'),'utf-8');

/* file sistem peprmite manipular archivos . le digo que quiero que lea :platos.json , como segunto parametro le paso la codificacion de letra :utf-8*/
/*parseamos para que podeamos manipular el json q es un formato estandarizado que no respeta el tipo de valor de la propiedad(booleano, string,numero) */
module.exports = JSON.parse(datos);