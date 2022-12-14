// ESTE ES EL POLYFILL DE COMMONJS.
// Ahora esto ya se puede usar en el navegador cargando este archivo solo
// Para repetir, ejecutar npm run-script build
(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
/**
 * Este es el punto de entrada de Nodejs. Aquí se requiere el modulo
 * math para el calculo y este ya importa sus dependencias.
 * 
 * OJO las dependencias se cargan una sola vez al contexto global por lo que una
 * variable de un modulo sera comun aunque se use desde dos modulos distintos
 */

var math = require('./math.js');

console.log(math.inc(10));
},{"./math.js":2}],2:[function(require,module,exports){
// require en Node.JS permite importar el módulo dentro de este.
var sumar = require('./sumar.js');

function inc(a) {
    return sumar(a,1);
}

// En este caso, la exportación es de un objeto entero
module.exports = {
    inc: inc
};
},{"./sumar.js":3}],3:[function(require,module,exports){
function sumar(a,b) { return a + b;}

// module.exports permite exportar solo la funcion sumar en este objeto
module.exports = sumar;
},{}]},{},[1]);
