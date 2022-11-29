/*Ejecutar con nodemon */

let promise1 = new Promise(resolve => {
    const value = 5;
    setTimeout(() => {
        console.log('Se resuelve promesa 1 con valor ',value);
        resolve(value)
    },1000)
})

let promise2 = new Promise(resolve => {
    const value = 9;
    setTimeout(() => {
        console.log('Se resuelve promesa 2 con valor ',value);
        resolve(value)
    },3000)
})

let promise3 = new Promise(resolve => {
    const value = 15;
    setTimeout(() => {
        console.log('Se resuelve promesa 3 con valor ',value);
        resolve(value)
    },2000)
})

let all = Promise.all([promise1,promise2,promise3])
console.log('Esperando resolucion de las promesas');
all.then(result => {
    console.log('Resultados: ', result);
})
console.log('Then pasado');