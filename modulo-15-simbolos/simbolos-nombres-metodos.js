/*
Usar simbolos en los metodos y permitir que las librerias usen esos metodos y no de otros objetos mas antiguos.
Asume que los objetos tienen un metodo con ese nombre
*/

let Dumper = function()  {
    this.dumpObject = function(obj) {
        console.log('Dumping object');
        if(typeof(obj["dump"]) === "function"){ // Si tiene un metodo dump, se invoca
            obj["dump"]();
        }
        else {
            // Accion por defecto, pej iterar sobre todas las claves
            for(let k in obj){
                console.log(k, obj[k]);
            }
        }
    }
}


let a = {
    v: 42,
    ov: 69,
    foo(){}
}

let dumper = new Dumper();
dumper.dumpObject(a);

let b = {
    v: 42,
    ov: 69,
    foo(){},
    dump() {console.log('Este objeto si tiene dump');}
}
dumper.dumpObject(b);

// Este codigo funciona bien. pero si alguien usa un objeto que ya tiene una función dump para otras cosas va a tener una colision, haciendo
// llamada a metodo dump cuando era a otro. Ahi los simbolos permiten tener nombres unicos. Se soluciona como sigue

//Definimos un simbolo al objeto

//Ahora en lugar de verificar si existe una funcion dump, verificar si existe la clave cuyo valor sea el simbolo
Dumper = function()  {
    this.dumpObject = function(obj) {
        console.log('Dumping object');
        if(typeof(obj[Dumper.dump]) === "function"){ // Si tiene un metodo dump, se invoca
            obj[Dumper.dump]();
        }
        else {
            // Accion por defecto, pej iterar sobre todas las claves
            for(let k in obj){
                console.log(k, obj[k]);
            }
        }
    }
}
Dumper.dump = Symbol("dump");

let dumper2 = new Dumper();
dumper2.dumpObject(a);

//Pero ahora b, espera que el metodo compatible no sea el que existe, sino otro con el simbolo
b[Dumper.dump] = () => {console.log('Dumping con el simbolo');}

console.log('Asi queda el objeto b ', b); // El [Symbol(dump)] hace que sea unico
dumper2.dumpObject(b);