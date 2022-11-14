/*
Crea una función que tome como parámetro una matriz y calcule el máximo de los elementos que ésta contiene, 
desechando los que NO son números. Lo mismo para el mínimo. ¿Has tenido en cuenta todas las posibles 
circunstancias (por ejemplo que no haya ningún número, que todos los números sean iguales...? ¿Funcionaría tu función en estos casos?
*/
console.log('\nEjercicio 1');
const maxNumbers = (array = []) => {
    const onlyNumbers = array.filter(element => typeof (element) == 'number');
    if (onlyNumbers.length == 0) {
        return 'No hay numeros'
    }
    return Math.max(...onlyNumbers);
}

const exampleArray = [1, 4, 15, 15, 'f', true, 'AAA'];
console.log('Máximo: ', maxNumbers(exampleArray));

/*
Crea una función que permita multiplicar una matriz lineal (de una sola dimensión) por cualquier número.
*/

console.log('\nEjercicio 2');
const scalarMultiplication = (array = [], factor = 1) => {
    return array.map(e => e * factor);
}
const exampleVector = [5, 33, 7, 1];
console.log('Multiplicacion elemento a elemento: ', scalarMultiplication(exampleVector, 20));


/*
Crea una función para multiplicar entre sí dos matrices cualesquiera de "n" filas por "m" columnas. 
Debes tener cuidado porque no es posible multiplicar entre sí matrices de cualquier dimensión, así que habrá que comprobarlo. 
*/

console.log('\nEjercicio 3');
const matrixA = [[2, 4, 5], [6, 5, 1], [1, 0, 0]];
const matrixB = [[1, 4], [9, 1], [1, 7]];

const multiplicaMatriz = (matrizA = [], matrizB = []) => {
    const getDimension = (matrix = []) => {
        const rows = matrix.length;
        const colsAll = matrix.map(col => col.length);
        const maxCols = Math.max(...colsAll);
        if (!colsAll.every(c => c == maxCols))
            return undefined;
        return [rows, maxCols];
    }
    const getRow = (matrix = [], idx) => {
        return matrix[idx];
    }
    const getCol = (matrix = [], idx) => {
        return matrix.map(row => row[idx]);
    }

    const multiplicarElementoAElemento = (row = [], col = []) => {
        let result = 0;
        row.forEach((r, idx) => result += r * col[idx]);
        return result;
    }

    const dimensionA = getDimension(matrixA);
    const dimensionB = getDimension(matrixB);
    if (!dimensionA || !dimensionB || dimensionA[1] != dimensionB[0])
        return undefined;

    const result = new Array(dimensionA[0])

    for (let i = 0; i < dimensionA[0]; i++) {
        result[i] = new Array(dimensionB[1]);
        for (let j = 0; j < dimensionB[1]; j++) {
            const fila = getRow(matrixA, i);
            const columna = getCol(matrixB, j);
            const valor = multiplicarElementoAElemento(fila, columna);
            result[i][j] = valor;
        }

    }
    return result;
}

console.log('Resultado multiplicación de matrices: ', multiplicaMatriz(matrixA, matrixB));


/*

¿De qué manera podrías hacer que una matriz compuesta de números exclusivamente, 
se pudiera ordenar considerando sus valores, es decir, sin considerar que son cadenas como hace sort por defecto? Si tienes 
que escribir una función de ordenación, ¿cuál sería la función más simple que podrías escribir? (pista, tendría únicamente una línea).

Esto es lo de a - b

Crea una función que permita filtrar cualquier matriz con filter y devuelva únicamente los elementos numéricos que ésta contenga, desechando los que no sean de este tipo de datos.

esto con typeof como se hizo en el ejemplo uno


*/