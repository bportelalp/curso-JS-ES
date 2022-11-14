console.log('\n ---- Inicio programa ----');

const pila = [1,2,3,4,5,6,7,8,9];

// Push añade elementos a arreglo al final y pop los retira
console.log('Original: ', pila.toString());
pila.push(20);
console.log('Push:     ',pila.toString());
const quitado = pila.pop(); // quitado es el valor del final
console.log('Pop:      ',pila.toString());

// Unshift introduce elemento al principio y shift lo retira
pila.unshift('x');
console.log('Añade:  ', pila.toString());
pila.shift()
console.log('Retira: ', pila.toString());

console.log('---- Fin programa ----\n ');