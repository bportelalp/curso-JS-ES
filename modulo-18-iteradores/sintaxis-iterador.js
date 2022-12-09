/*
Demostración de crear un iterador

*/

let obj = {
    [Symbol.iterator]() {
        let idx = 0;
        return {
            next() {
                idx++
                return {
                    value: 10 * idx,
                    done: idx > 3
                }
            }
        }
    } 
}
console.log('Inicio');
for (const item of obj) {
    console.log(item);
}
console.log('Fin. No devuelve nada porque done ya es true, no se itera sobre nada');