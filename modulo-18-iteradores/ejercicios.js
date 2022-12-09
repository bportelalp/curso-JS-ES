// Generador de rango
let iterRange = function* (min = 0, max = 1) {
    for (let idx = min; idx <= max; idx++) {
        yield idx;
    }
}

// iterador sobre iniciales
let wordDictionary = (function () {
    let dict = [];
    return {
        addWord(word) {
            dict.push(word);
        },
        [Symbol.iterator]: function* () {
            for (const word of dict) {
                yield word[0];
            }
        }
    }
})();

// iterar sobre factores primos
let objPrimals = (number) => {
    return {
        value: number,
        [Symbol.iterator]: function* () {

            for (let i = 1; i <= this.value; i++) {
                if (this.value % i == 0) {
                    // this i is factor of value, check if it is primal
                    let isPrime = true;
                    let factor = i;
                    for (let j = 2; j < factor; j++) {
                        if (factor % j == 0) {
                            isPrime = false;
                        }
                    }
                    if (isPrime)
                        yield factor;
                    else
                        continue;
                }
            }
        }
    }
}


console.log('\nIterador de rango');
console.log('Rango iterado de 10 a 15', [...iterRange(10, 15)]);



console.log('\nIterador de iniciales de palabras');
wordDictionary.addWord('Hola');
wordDictionary.addWord('que');
wordDictionary.addWord('tal');
console.log('Las iniciales son:',[...wordDictionary]);

console.log('\nIterador sobre numeros primos');
let number = objPrimals(130);
console.log('factores primos', [...number]);