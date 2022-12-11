/*
El objeto array es un objeto particular, conocido como 'objeto exotico' porque el 
motor de JS lo trata de manera un poco diferente. Véase
*/

let myArr = Object.create(Array.prototype);
myArr.push(10);
myArr.push(20);
console.log('La longitud debe ser 2:', myArr.length);          // 2

myArr = Object.create(Array.prototype);
myArr[0] = 10;
myArr[1] = 20;
console.log('La longitud debe ser 2:', myArr.length);        // 0!!!!!!
/*
Esto se debe a que el indizado es una caracteristica propia del objeto array, y depende
de como lo interpreta con JS. Por eso no funciona en un objeto aunque herede
el prototipo del array.
*/

/**
 * Sin embargo, las clases de ES6 si permiten que este comportamiento funcione.
 */
const MyArray = class extends Array {
    constructor(len) {
        super(len);
    }
}
myArr = new MyArray(0);
myArr[0] = 10;
myArr[1] = 20;
console.log('La longitud debe ser 2:', myArr.length);      // 2 (¡Viva ECMAScript 2015!)