/**
 * Esta es la esencia del modulo previo ES6.
 * El mero hecho de hacer un script que importa el script
 * ya se declara este objeto, que en realidad contiene
 * los métodos visibles
 * Definir algo$ es para decir que sería un modulo
 */
let m$ = (function () {

    function _sumar(a, b) {
        return a + b;
    }


    function inc(a) {
        return _sumar(a, 1);
    }

    return {
        // Solo se expone la ultima
        inc,
    }
})();

/**
 * Hay otra forma de hacerlo, que sería metiéndolo directamente
 * en window, que incluso se lo puedo
 * pasar por parametro a la funcion inicial, así 
 * en Node.JS, que no existe window, esa funcion
 * recibiría Global, que es su propio ambito global.
 */
(function (contextGlobal) {
    function MathModule() {
        function _sumar(a, b) {
            return a + b;
        }

        function inc(a) {
            return _sumar(a, 1);
        }

        return {
            // Solo se expone la ultima
            inc,
        }
    }

    contextGlobal.m2$ = MathModule();
})();