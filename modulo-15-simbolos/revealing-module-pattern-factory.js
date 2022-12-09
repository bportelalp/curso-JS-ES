
let singletonFactory = function (valueCreation) {
    return (function () {
        //Estos miembros serán privados
        let value = valueCreation;
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
}


const singleton1 = singletonFactory(10);
const singleton2 = singletonFactory(20);

console.log('Llamada a la funcion foo del singleton1: ', singleton1.foo(1));
console.log('Acceder a value, no está definido en singleton1', singleton1.value);

console.log('Llamada a la funcion foo del singleton1: ', singleton2.foo(1));
console.log('Acceder a value, no está definido  en singleton1', singleton2.value);