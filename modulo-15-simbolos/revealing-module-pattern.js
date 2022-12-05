/*
Revealing module pattern es un patrón en JS que permite tener funciones o variables privadas, que genera
instancias singletons de objetos, porque el modulo que genera ese objeto solo se llama una vez y no se
almacena la logica en una variable para su uso posterior
*/

//Esta funcion se declara, se llama y no se vuelve a llamar, su resultado se almacena en singleton
let singleton = (function () {
    //Estos miembros serán privados
    let value = 42;
    let pfoo = function (i) {
        return i + value + pbar();
    }
    let pbar = function () {
        return 10;
    }
    //Siempre devolvemos un objeto que expone los miembros publicos
    return {
        foo: pfoo
    }

})();


//Se llama a foo
console.log('Llamada a la funcion foo del singleton: ',singleton.foo(1));
console.log('Acceder a value, no está definido', singleton.value);
//console.log('Acceder a pfoo, no esta definido, aunque sabemos que es foo', singleton.pfoo()); //Genera error
//console.log('Acceder a pbar, no está definido', singleton.pbar()); //Genera error