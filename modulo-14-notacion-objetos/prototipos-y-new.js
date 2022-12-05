let AnimalTest = function() {

};

let animal1 = new AnimalTest();

console.log('\nEl prototipo de animal1 es', animal1.__proto__);
console.log('Se cumple animal1.__proto__ === AnimalTest.prototype', animal1.__proto__ === AnimalTest.prototype);

/*
En teoria animal1.__proto__ existe para los objetos y animal1.prototype existe para las funciones constructoras
*/

let animal2 = new AnimalTest();

console.log('Se cumple animal1.__proto__ === animal2.__proto__', animal1.__proto__ === animal2.__proto__);


/*
Cómo hacer herencia basada en prototipos
*/
console.log('\nHerencia de prototipos');
let Animal = function() {
    this.comer = function(){
        console.log('Comiendo');
    }
}
let perro = new Animal();

let Perro = function() {
    this.ladrar = function(){
        console.log('Guau!');
    }
}

// Fijar la herencia
Perro.prototype = new Animal();

let a = new Animal();
let p = new Perro();
console.log('Prototipo a es Animal.prototype' , a.__proto__ == Animal.prototype);
console.log('Prototipo p es Perro.prototype' , p.__proto__ == Perro.prototype);
console.log('Prototipo p es Perro.prototype' , p.__proto__ == Perro.prototype);

console.log('El perro ladra y come');
p.ladrar(); //Que está en el propio perro
p.comer(); //pero que está en animal
