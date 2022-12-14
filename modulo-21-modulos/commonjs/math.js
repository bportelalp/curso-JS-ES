// require en Node.JS permite importar el módulo dentro de este.
var sumar = require('./sumar.js');

function inc(a) {
    return sumar(a,1);
}

// En este caso, la exportación es de un objeto entero
module.exports = {
    inc: inc
};