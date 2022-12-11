/**
 * Mediante símbolos
 * Era el metodo mediante el que desde el exterior no se pueden acceder a simbolos, solo mediante
 * referencias a esos simbolos. El problema es que estas referencias pueden ser publicas por lo que
 * estamos en las mismas.
 * Para esto usabamos la función envoltura de la declaración, que daba el ambito local para las variables
 * que queriamos que fuesen privadas, y tras ejecutarse dejaba de tener visibilidad. Era el 'Revealing
 * Module Pattern'
 */

const Square = (function() {
    var SizeSym = Symbol("size");
    return class {
        constructor(r) {
            this[SizeSym] = r;
        }
        
        area() { 
            return this[SizeSym] * this[SizeSym];
        }
        
        get size() {
            return this[SizeSym];
        }
    }
})();

let sq = new Square(10);
console.log('Area del cuadrado 1:',sq.area());
sq.size = 20;      // ignorado
console.log('Tamaño del cuadrado 1:',sq.size); 

let sq2 = new Square(5);
console.log('Area del cuadrado 2:',sq2.area());
sq2.size = 20;      // ignorado
console.log('Tamaño del cuadrado 2:',sq2.size); 

/**
 * Sin embargo todavia se puede acceder usando Object.getOwnPropertySymbols
 */

/**
 * Mediante WeakMaps
 * Los weakMaps eran como Map, pero que el GC podia borrar elementos cuando dejasen de estar en el
 * ámbito. Se puede usar un WeakMap para mantener el ambito privado de todos los objetos de una
 * determinada clase, de manera que cuando el GC elimine los objetos, sus propiedades privadas
 * podrán desaparecer del WeakMap
 */

const SquareWeak = (function() {
    const privates = new WeakMap();
    return class {
        constructor(r) {
            privates.set(this, {size: r});
        }
        
        area() {
            let size = privates.get(this).size;
            return size * size;
        }
        
        get size() {
            return privates.get(this).size;
        }
    }
})();

// Ahora ya nunca se puede acceder a 'privates'
sq = new Square(10);
console.log('Area del cuadrado 1:',sq.area());
sq.size = 20;      // ignorado
console.log('Tamaño del cuadrado 1:',sq.size); 
let a = sq.privates;
console.log('Privados:', a);
