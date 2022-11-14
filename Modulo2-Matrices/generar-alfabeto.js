const amount = "26";

console.log('\n ---- Inicio programa ----');

const generaAlfabeto = () => {
    let n;
    n = parseInt(amount);
    if (!n)
        return 'Cancelado'
    if (n > 26)
        n = 26;
    if (n < 1)
        n = 1;

    const alfabeto = [];

    for (let idx = 0; idx < n; idx++) {
        const asciiCode = idx + 65
        let character = String.fromCharCode(asciiCode)
        
        alfabeto[idx] = character
    }

    return alfabeto;

}


console.log(generaAlfabeto());
console.log('---- Fin programa ----\n ');