let obj = {a:10,b:20};

console.log('Desestructurar las propiedades');
let {a: x, b: y} = obj;
console.log('x: ', x);
console.log('y: ', y);

let {b: z} = obj;
console.log('z: ', z);

let {noExiste: w} = obj;
console.log('w: ', w);