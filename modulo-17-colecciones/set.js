/*
Set representa un conjunto de datos, similar a una List, y parecido a un array.
Sin embargo, se puede añadir un valor dos veces pero solo estará presente una vez, algo
que no pasa con el tipo List.

Usa set en lugar de array si hay que comprobar si un elemento existe en el array
*/

console.log('\n');

let set = new Set();

set.add('hola');
set.add(23);
set.add(1).add('CampusMVP');

console.log('Tamaño:',set.size);
console.log('Contiene 23?', set.has(23));

set.add({a:30});
console.log('Contiene {a:30}?', set.has({a:30}));

console.log('Tamaño:',set.size);
set.add(23);
console.log('Añadir un valor que ya existe, no hace nada',set.size);
set.add({a:30})
console.log('Pero funciona con referencias, por eso este si se añadade',set.size);

// Funciona el forEach, este puede devolver la clave tb como Map, pero la clave se disfraza con el propio valor.
// Esto permite usar un set o un map indistintamente en escenarios de lectura