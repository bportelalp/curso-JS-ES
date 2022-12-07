/*
Demo de como usar simbolos para declarar variables privadas en los objetos
*/
let s = Symbol("v"); 
let obj =  {
    [s]: 42,
    v: 60
}

console.log('Contenido de obj: ', obj);
// Se observa que existe el simbolo v.
console.log('Object keys: ', Object.keys(obj));
// Pero en keys no aparece como tal dicho simbolo, solo aparece la v que es propiedad

console.log('Las propiedades definidas en el objeto: ', Object.getOwnPropertyNames(obj));

/*
La propiedad como symbol esta oculta al exterior, solo seria observable desde dentro.
Pero generamos la s, que en realidad es el puntero al simbolo para poder acceder a ella
*/
console.log('Acceder al simbolo con s: ', obj[s]);

//Y ahora podemos saber cuantos simbolos tiene ese objeto, por lo que se puede acceder igualmente a los simbolos.
// Solo se evita con el RevealingModulePattern
console.log(Object.getOwnPropertySymbols(obj));