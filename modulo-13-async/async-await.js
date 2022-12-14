
function waitPromise(sec) {
    const promise = new Promise((resolve, reject) => {
        setTimeout(resolve, sec);
    });
    return promise;
}

console.log('Inicio espera');

// Sin await, esta llamada termina despyes del console log fin
// waitPromise(500).then(() => {
//     console.log('Espera terminada');
// })

async function waitAsync() {
    console.log('Dentro de waitAsync pero antes de await');
    await waitPromise(300);
    console.log('Espera async terminada');
    return 'He terminado!. devuelvo este valor';
}

//El uso de async hace que esté encapsulado dentro de una promesa, por
//eso puedo usar ahora todo lo de async
let resultado = waitAsync();

resultado.then(res => {
    console.log('Función waitAsync() terminada. Resultado: ', res);
})
console.log('Resultado',resultado);
console.log('Fin');