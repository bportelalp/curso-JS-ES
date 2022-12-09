/*
Diferentes tipos de bucles que había
for
for-in
for-of incluido en ES6
*/

console.log('\nVamos a sumar');
const data = [1, 10, 100, 1000];
let sum = 0;

for (let idx = 0; idx < data.length; idx++) {
    sum += data[idx];
}
console.log('\nLa suma con for es:', sum);

sum = 0;
for (let item in data) {
    sum += item;
}
console.log('\nLa suma con for-in es:', sum);
console.log('Da un resultado erroneo, porque for-in no itera sobre los elementos, sino sobre las claves, que en los arrays son el idx como cadena');
// for-in es una iteracion sobre claves del objeto, vease el ejemplo

let a = { v: 42, v2: 100 };
let result = '';
for (const item in a) {
    result += item + ',';
}
console.log('Elementos al iterar sobre objeto:', result, 'Vemos que son las propias claves');

sum = 0;
for (const item of data) {
    sum += item;
}
console.log('\nLa suma con for-of es:',sum);
console.log('for-of si que itera sobre valores');

// for-of no funciona sobre los valores de los objetos. Es para arrays, Map y Set. Si lo hicieramos nos diria que el objeto no es iterable.
