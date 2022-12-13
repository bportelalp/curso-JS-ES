/** m1
 * Esta es la esencia del modulo previo ES6.
 * El mero hecho de hacer un script que importa el script
 * ya se declara este objeto, que en realidad contiene
 * los métodos visibles
 * Definir algo$ es para decir que sería un modulo
 */
let m1$ = (function () {

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

/** m2
 * Hay otra forma de hacerlo, que sería metiéndolo directamente
 * en window, que incluso al usar this,
 * en Node.JS, que no existe window, esa funcion
 * recibiría Global, que es su propio ambito global.
 */
(function () {
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

    this.m2$ = MathModule();
})();



/** m3
 * Se podría necesitar dependencias de otro módulo, en
 * ese caso se debería optar por algo así.
 * El problema es que se debe importar el modulo sumar
 * antes del modulo math, en el index.html
 */
(function () {
    function MathModule() {

        function inc(a) {
            // Aqui se iria a la variable global, haciendo la dependencia
            // de math.js de sumar.js
            return suma$.sumar(a, 1);
        }

        return {
            // Solo se expone la ultima
            inc,
        }
    }

    this.m3$ = MathModule();
})();