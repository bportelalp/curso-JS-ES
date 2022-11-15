console.log('\n ---- Inicio programa ----');

// Inicializacion tipica, se puede ir añadiendo elementos
// Puedo forzar un tamaño fijo con new Array(20);
// Tambien con corchetes vacios var coches = []; pero no se especifica el tamaño
const coches = new Array('Porsche','Audi','Volkswagen'); // evitar esta, mejor corchetes
coches[3] = 'Mercedes';

console.log('con foreach');
coches.forEach(coche => {
    console.log(coche);
});

console.log('\n Con for in, se refiere al indice');
for (const idx in coches) {
    console.log(coches[idx]);
}


// Se pueden añadir elemetnos de tipo distinto, el array es como un list de python
// Esto es lo que permite matrices multidimensionales
console.log('\nMatriz multidimensional');
const dimension1 = ['00','01','02'];
const dimension2 = ['10','11','12'];
const matriz2D = [dimension1, dimension2];

console.log('Matriz: ',matriz2D);
console.log('Acceder a un elemento (1,2): ', matriz2D[1][2]);
// console.log('Acceder a un elemento de fuera: ', matriz2D[2][1]); //Genera error

console.log('---- Fin programa ----\n ');