class Uri {
    /*JS no tiene el concepto de sobrecarga de funciones, pero se puede simular con la desestructuracion */
    constructor({ protocol, address }) {
        // Usamos arguments para saber si el tipo del argumento es una cadena, así ya no componemos desde el objeto
        if (typeof (arguments[0]) === 'string')
            this, this.rawUri = arguments[0];
        else
            this.rawUri = protocol + '://' + address;
    }
}

let url = new Uri('http://www.google.es');

console.log('Variable url:', url);
console.log('Tipo de url:', typeof (url));
console.log('Es una instancia de Uri?:', url instanceof Uri);

// Poder generar Uri mediante un objeto
let url2 = new Uri({
    protocol: 'http',
    address: 'www.google.es'
})
console.log('\nVariable url2:', url2);
console.log('Tipo de url2:', typeof (url2));
console.log('Es una instancia de Uri?:', url2 instanceof Uri);