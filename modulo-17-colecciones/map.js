/*
Tipo MAP.
Coleccion de valores indexados por clave, donde la clave puede ser cualquier objeto.
Es el equivalente a Dictionary<TKey, TValue>

El comportamiento de Map podria ser asumido por un objeto estándar siempre que TKey fuese una
cadena, pero con Map TKey puede ser otro objeto
*/

console.log('\n');
let dict = new Map();
dict.set('one', 1);
dict.set('two', 2);
let one = dict.get('one');
console.log('Valor de one:',one);

let mapObj={};
mapObj['one'] = 1;
mapObj['two'] = 2;
let oneObj = mapObj['one'];
console.log('Valor de oneObj:', oneObj);

/*El comportamioento es equivalente, pero no sucederia si la clave fuese otra cosa distinta de una cadena
*/

let tieneClave = dict.has('one');
console.log('Tiene clave one?',tieneClave);


// Las comparaciones se harían con ===, por lo que es una comparación por referencia
let a =  {};
dict.set(a, 'objeto A')
console.log('Tiene clave {}?', dict.has({}));
console.log('Tiene clave a?', dict.has(a));
console.log('Tamaño del mapa:', dict.size);

console.log('\nSe puede aplicar foreach');
dict.forEach((v, k) => console.log('Elemento en clave ', k, 'valor',v))