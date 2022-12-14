/**
 * Ver primero comentarios de sumar.js
 * Aquí un ejemplo de como traerse la función sumar del
 * módulo de sumar.js
 */
define(['./sumar.js'], function(sumar) {
    function inc(a) {
        return sumar(a,1);
    }

    return {inc: inc};

});
