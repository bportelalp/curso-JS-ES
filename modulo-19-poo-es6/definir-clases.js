class Uri {
    /*JS no tiene el concepto de sobrecarga de funciones, pero se puede simular con la desestructuracion */
    constructor({ protocol, address }) {
        // Usamos arguments para saber si el tipo del argumento es una cadena, así ya no componemos desde el objeto
        if (typeof (arguments[0]) === 'string') {
            this.rawUri = arguments[0];
            const id = this.rawUri.indexOf("://");
            this._address = this.rawUri.substring(id + 3);
            this._protocol = this.rawUri.substring(0, id);
        }
        else {
            this.rawUri = protocol + '://' + address;
            this._protocol = protocol;
            this._address = address;
        }
    }

    navigate() {
        if (typeof document !== 'undefined') { // para navegador
            document.location.href = this.rawUri;
        }
        else {// para Node
            fetch(this.rawUri)
                .then(result => console.log('\nFinalizado llamada al metodo navigate:', result.status));
        }
    }

    get protocol() { return this._protocol }

    get address() { return this._address }

    set address(addr) {
        if(typeof(addr) == 'string' && addr !== ''){
            this._address = addr;
            this.rawUri = this._protocol + '://' + this._address;
        }
    }
    set protocol(protocol) {
        if(typeof(addr) == 'string' && protocol !== ''){
            this._protocol = protocol;
            this.rawUri = this._protocol + '://' + this._address;
        }
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

// Navegar
console.log('\nNavegando al sitio', url.rawUri);
url.navigate();
console.log('El método está definido en el prototipo?', url.navigate === Uri.prototype.navigate);

console.log('Propiedad protocolo:', url.protocol);
console.log('Propiedad address:', url.address);

url.address = 'www.campusmvp.es';
console.log('Cambiada la propiedad address:', url);