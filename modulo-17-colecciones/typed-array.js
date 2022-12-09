/*
Permiten manejar operaciones a nivel bytes.

ArrayBuffer es el tipo base, pero hay otros segun los datos que contenga
*/

var float32 = new Float32Array(2);           // Si el parámetro es entero, indica el TAMAÑO
float32[0] = 42;
console.log('Valor en posicion 0:',float32[0]); // 42
console.log('Tamaño del array:', float32.length); // 2
console.log('Bytes por elemento:',float32.BYTES_PER_ELEMENT); // 4

console.log('\n');
var arr = new Float32Array([21,31]);         // Podemos crear un array tipado a partir de un array
console.log('Elemento pos 1:',arr[1]); // 31

console.log('\nCrear a partir de ArrayBuffer');
var buffer = new ArrayBuffer(16);            // Array buffer de 16 bytes     
var z = new Float32Array(buffer); // O (muy habitual) lo podemos crear a partir de un ArrayBuffer
z[0] = 10.1;
console.log('Tamaño del buffer', buffer.length);
console.log('Tamaño de z', z.length, 'Porque cada float32 ocupa 4 bytes');


console.log('\nInterpretar los datos de diferente manera, pudiendo acceder a bytes');
var buffer = new ArrayBuffer(4); 
var f32 = new Float32Array(buffer); 
f32[0] = 100.0; 
var ui8 = new Uint8Array(buffer); 
var [b1, b2, b3, b4] = ui8;
console.log('ui8', ui8);

// TODO

var buffer = new ArrayBuffer(4);            // 4 bytes
var i32 = new Int32Array(buffer);
i32[0] = -1;
var dataView = new DataView(buffer);
var i = dataView.getInt32(0);           // Obtenemos un int32 (4 bytes) desde el byte 0 (hasta el 3)
var b1 = dataView.getInt8(0);           // Obtenemos un int8 (1 byte) CON SIGNO desde el byte 0 (solo el 0)
var b2 = dataView.getUint8(0);           // Obtenemos un int8 (1 byte) SIN SIGNO desde el byte 0 (solo el 0)