/*
parametros rest son los aplicados spread en el ultimo parametro de una funcion, siendo
estos los no nombrados
*/

let foo = (a, b, ...c) => {
    console.log('a:', a, 'b:', b, 'c:', c);
}

console.log('\nFuncion con parametro rest, los parametros de más, van a c, que es un array de los demas parametros que no son ni a ni b');
foo(1, 2, 3, 4, 'Hola mundo', 5);
console.log('Si no se le pasa ninguno extra, c es un array vacío, no undefined');
foo(1,2);