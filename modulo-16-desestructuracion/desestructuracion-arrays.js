
console.log('Desestructurar');
let arr = [10, 20];
let [a, b] = arr;
console.log('a: ', a);
console.log('b: ', b);

console.log('Intercambiar valores');
[a, b] = [b, a] //Intercambiar los valores
console.log('a: ', a);
console.log('b: ', b);

console.log('Saltarse elementos');
let arr2 = [10, 20, 30, 40];
[a, , b] = arr2; // El segundo elemento se descarta
console.log('a: ', a);
console.log('b: ', b);

console.log('Omitir elementos, pero pasarse de indice');
let arr3 = [10];
[a,b] = arr3; // No existe un elemento en la posicion 1
console.log('a: ', a);
console.log('b: ', b);
