const { HttpUri, Uri } = (function () {
    let _privates = new WeakMap();
    class Uri {
        /*JS no tiene el concepto de sobrecarga de funciones, pero se puede simular con la desestructuracion */
        constructor({ protocol, address }) {
            _privates.set(this, {})
            const pr = _privates.get(this);
            // Usamos arguments para saber si el tipo del argumento es una cadena, así ya no componemos desde el objeto
            if (typeof (arguments[0]) === 'string') {
                this.rawUri = arguments[0];
                const id = this.rawUri.indexOf("://");

                pr._address = this.rawUri.substring(id + 3);
                pr._protocol = this.rawUri.substring(0, id);
            }
            else {
                this.rawUri = protocol + '://' + address;
                pr._protocol = protocol;
                pr._address = address;
            }
        }

        navigate() {
            if (typeof document !== 'undefined') { // para navegador
                document.location.href = this.rawUri;
            }
            else {// para Node
                console.log('Finalizado llamada al metodo navigate');
            }
        }

        get protocol() { return _privates.get(this)._protocol }

        get address() { return _privates.get(this)._address }

        set address(addr) {
            if (typeof (addr) == 'string' && addr !== '') {
                const pr = _privates.get(this);
                pr._address = addr;
                this.rawUri = pr._protocol + '://' + pr._address;
            }
        }
        set protocol(protocol) {
            if (typeof (addr) == 'string' && protocol !== '') {
                const pr = _privates.get(this);
                pr._protocol = protocol;
                this.rawUri = pr._protocol + '://' + pr._address;
            }
        }
    }

    class HttpUri extends Uri {
        constructor(address) {
            super({ protocol: 'http', address }); // invocación al ctor de la clase base
        }
    }

    return { HttpUri, Uri }
})();



const url = new Uri('http://www.google.es');

console.log('Variable url:', url);
console.log('Tipo de url:', typeof (url));
console.log('Es una instancia de Uri?:', url instanceof Uri);

// Poder generar Uri mediante un objeto
const url2 = new Uri({
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



console.log('\nHERENCIA');
const campusmvp = new HttpUri('www.campusmvp.es');
console.log('Objeto de clase que hereda de Uri;', campusmvp);
console.log('Es una instancia de Uri?:', campusmvp instanceof Uri); // porque está en la cadena de prototipos
console.log('Es una instancia de HttpUri?:', campusmvp instanceof HttpUri);
console.log('campusmvp.__proto__ === HttpUri.prototype?:', campusmvp.__proto__ === HttpUri.prototype);
console.log('campusmvp.__proto__.__proto__ === Uri.prototype?:', campusmvp.__proto__.__proto__ === Uri.prototype);
