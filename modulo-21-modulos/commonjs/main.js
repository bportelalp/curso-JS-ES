/**
 * Este es el punto de entrada de Nodejs. Aquí se requiere el modulo
 * math para el calculo y este ya importa sus dependencias.
 * 
 * OJO las dependencias se cargan una sola vez al contexto global por lo que una
 * variable de un modulo sera comun aunque se use desde dos modulos distintos
 */

var math = require('./math.js');

console.log(math.inc(10));