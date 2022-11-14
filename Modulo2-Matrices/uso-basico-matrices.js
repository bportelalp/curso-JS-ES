console.log('\n ---- Inicio programa ----');

// Inicializacion tipica, se puede ir añadiendo elementos
// Puedo forzar un tamaño fijo con new Array(20);
// Tambien con corchetes vacios var coches = []; pero no se especifica el tamaño
var coches = new Array('Porsche','Audi','Volkswagen');
coches[3] = 'Mercedes';

console.log('con foreach');
coches.forEach(coche => {
    console.log(coche);
});

console.log('\nCon for in, se refiere al indice');
for (const idx in coches) {
    console.log(coches[idx]);
}

console.log('---- Fin programa ----\n ');