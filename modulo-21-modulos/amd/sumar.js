/**
 * LA funcion define es equivalente al require de CommonJS, la diferencia
 *  es que esta recibe un array de los modulos que necesita, y ejecuta una
 * función similar a la del RMP recibiendo los modulos. Además lo que devuelva
 * la función es lo que el módulo exporta para consumir desde otros módulos
 */
define([], function() {
    function sumar(a,b) { return a + b;}
    return sumar;
});

