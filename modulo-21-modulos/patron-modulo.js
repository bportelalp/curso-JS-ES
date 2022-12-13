/**
 * El patrón módulo supone crear una variable con una función anónima autoejecutable cuyo ámbito 
 * local permite que las variables declaradas en el interior no sean visibles desde fuera. Sólamente
 * se devuelve un objeto con los métodos y variables que necesitamos públicas
 */

//l$ es el nombre del módulo
let l$ =(function() {
    let _value = 0;
    const inc = function() { _value++; }
    const value = function() { return _value; }
    return {
        inc, 
        value
    };
})();

//Ahora desde cualquier otro sitio ya podemos
l$.inc();
let x = l$.value();
console.log('Valor de value:', x);
//console.log('Pero al acceder a _value', _value); //Genera error

/**
 * La variante es el Revealing Module Pattern, donde además:
 * - TODOS los miembros publicos y privados se definen en la funcion anonima autoejecutable.
 * - Devuelve un objeto con referencias a sólo algunos de los metodos o variables definidos dentro
 */