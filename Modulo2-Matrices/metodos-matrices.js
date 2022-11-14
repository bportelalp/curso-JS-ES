console.log('\n ---- Inicio programa ----');

const matriz1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// Une los elementos unidos por los caracteres incluidos. Es una especie de ToString
console.log('Método .join(): ',matriz1.join('--'));

// Concatenar dos matrices 
const matrizA = [1,2,3];
const matrizB = ['a','b'];
const valorA = 3;
const concatenada = matrizA.concat(matrizB, valorA);
console.log('Arreglo concatenado .concat(): ', concatenada);

// Extraer trozos de arreglos
const sliced = concatenada.slice(2,5); // si no especifico el segundo, hasta el final
console.log('Arreglo extraído .slice(,): ', sliced);

// Las matrices son objetos por referencia. Se puede conseguir una copia con slice sin parametros
const matrizZ = [1,2,3,4];
const otra = matrizZ.slice();
otra[1] = 5;
console.log('MatrizZ: ',matrizZ);
console.log('otra:    ',otra);

// slice retira los elementos, pero splice remueve esos elementos y se crea nueva matriz
const matrizSplice = [1,2,3,4,5,6];
const spliced = matrizSplice.splice(3,2);
console.log('Original: ',matrizSplice);
console.log('Splice:   ', spliced);

console.log('---- Fin programa ----\n ');