/**
 * Usa proxies para ocultar automáticamente de un objeto todas las propiedades que empiecen por un subrayado
 */

let obj = {
    _pr: 10,
    pu: 20,
}

let proxy = new Proxy(obj, {
    get(target, key, receiver) {
        if (!key.startsWith('_')) {
            return target[key];
        }
    },
    set(target,key, receiver){
        if (!key.startsWith('_')) {
            target[key] = receiver;
        }
    }
})

proxy.pu = 30;
console.log('Establecer propiedad publica', obj);
proxy._pr = 20;
console.log('Establecer propiedad privada', obj);

// Una solucion mas completa en contenido/privateHidder.js