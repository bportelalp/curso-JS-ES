let arr = [1, 2, 3, 4, 5, 6, 7];

let [x, , , y] = arr;

console.log('Desestructurando');
console.log('x:', x);
console.log('y:', y);

console.log('Desestructurando con spread');

let [a, , b, ...c] = arr;
console.log('a:', a);
console.log('b:', b);
console.log('c:', c); // c contiene los valores desde 3 al final

console.log('Spread permite combinar. Arr2 combina todos los valores del arr1 y otros nuevos');

let arr1 = [1, 2];
let arr2 = [70, 80, ...arr1, 90, 100]
console.log('arr1:', arr1);
console.log('arr2:', arr2);

console.log('\nCuando una funcion pide N argumentos, y tenemos el array de los argumentos, o algunos de ellos al menos');
let foo = (a, b, c, d, e) => {
    console.log(a, b, c, d, e);
}

let arguments = [1, 2, 3, 4]
console.log('Llamar a foo(arguments) toma arguments como el parametro a');
foo(arguments, 5);
console.log('Pero lo podemos desestructurar');
foo(...arguments, 5)