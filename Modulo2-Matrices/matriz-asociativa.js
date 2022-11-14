console.log('\n ---- Inicio programa ----');

// Matriz asociativa es una especie de diccionario Dictionary<string,List<string>>, JS no lo tiene pero se puede 'simular'
let coches = [];
coches['Alemanes'] = ['Audi', 'Volkswagen', 'Porsche'];
coches['Franceses'] = ['Renault', 'Citroen'];

console.log('Todos los coches: ', coches);
console.log('Longitud: ', coches.length); // Me devuelve 0 porque en realidad no tiene elementos como una matriz
console.log('Elemento 0: ', coches[0]); // Undefined tambien
// Javascript soporta esto porque en realidad la matriz se esta comportando como un prototipo, en realidad defino
// la propiedad 'Alemanes' del objeto array

console.log('---- Fin programa ----\n ');