console.log('\n ---- Inicio programa ----');

// método reverse da la vuelta a la matriz original
const matrizA = [7,6,9,11,4];
console.log('Orden contrario: ', matrizA.reverse()); // se conservaria con matrizA.slice().reverse()

// Sort ordena segun condicion
console.log('Ordenada de menor a mayor (como cadena): ', matrizA.sort()); // Y cambia la original

//Sort segun comparador
matrizA.sort((a,b) => a - b );
console.log('Ordenada de menor a mayor (func): ',matrizA);

matrizA.sort((a,b) => b - a );
console.log('Ordenada de mayor a menor (func): ',matrizA);

// Esto tambien vale para otros datos como cadena, con otros criterios como su longitud, etc
console.log('\nFiltros');
matrizB  = [4,144,1,6,32,62,'adwa',1,true,false];

// Buscar un elemento indexOf es un FirstOrDefault del index, equivalente es lastIndexOf() es un LastOrDefault del index
// admiten un segundo argumento que es la posicion a partir de la cual empezar a buscar
console.log('Índice de 62: ', matrizB.indexOf(62));

console.log('Índice de 11: ', matrizB.indexOf(11)); // -1 es que no existe


// Ejemplo, todos los elementos iguales
const findCoincidences = (elemento, array) => {
    const founded = [];
    let position = array.indexOf(elemento);; 
    while( position != -1){
        founded.push(position);
        position = array.indexOf(elemento, ++position);
    }
    return founded;
}

console.log('Repeticiones de 1 (indices): ', findCoincidences(1, matrizB));

//filter, extraer elementos que cumplen condicion
const matrizC = [1,2,3,4,5,6,7,8,9,10];
console.log('Extraer elementos pares: ', matrizC.filter(e => e%2 === 0));

// some equivalente a Any, si cumple alguno
console.log('Hay algun elemento par?: ', matrizC.some(e => e%2 === 0));
// every si todos cumplen la funcion
console.log('Son menores de 11?: ', matrizC.every(e => e < 11));

// map mapea valores de una funcion. Similar a Select
console.log('Doble de los numeros: ', matrizC.map(e => e*2))

// forEach iterar entre cada uno
console.log('ForEach para todos los elementos');
matrizC.forEach((e,idx, referencia) => console.log('matrizC tiene el valor ',e,' en el indice ', idx)); // referencia es la matriz entera por si la necesitamos


console.log('---- Fin programa ----\n ');