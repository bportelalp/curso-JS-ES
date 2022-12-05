let e = {
    name: 'campusmvp'
}

let shorthandProperty = 5;

let obj = {
    __proto__: e,
    cursos: ['JavaScript'],
    ["prop_dinamica" + '9']: 'Propiedad dinamica 9',
    ["rnd_" + Math.random()]: 'Otra propiedad dinamica generada',
    foo(p) { // Nueva forma de declarar funciones en objetos, sin usar function
        return p + 1
    },
    shorthandProperty // FOrma corta de declarar propiedades a partir del nombre, se genera una variable llamada shorthandProperty que tiene valor 5, equivalente a shorthandProperty: shorthandProterty
}

console.log('El objeto e:                                  ', e);
console.log('El objeto obj:                                ', obj);
console.log('La propiedad name en obj, que se hereda de e: ', obj.name);
console.log('Propiedad con nombre dinamico, con []:        ', obj.prop_dinamica9);