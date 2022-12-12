// // @ts-check
/**
 * Proxies permite interceptar operaciones que se hacen sobre otros objetos de forma transparente
 */

const obj = {
    property1: 15,
    property2: 'Hello World!',

    get value() { return 42; },

    sumProp1(value) {
        console.log('Entrada a la funcion');
        const newValue = this.property1 + value;
        this.property1 = newValue;
        return this.property1;
    }
}

/**
 * Este es el objeto que intercepta las llamadas a obj, con otro objeto que se le pasa para
 * indicar las llamadas que se quiere interceptar.
 */
const proxy = new Proxy(obj, {
    // Intercepta todas las operaciones de getter. Se hace metodo especifico y se devuelve el propio valor de value en el objeto original, que podria ser opcional
    get(target, key, receiver) {
        // target el propio objeto, key el nombre de la propiedad, receiver el valor de la propiedad en el objeto
        console.log(`Prop ${key} was called`);
        return target[key];
    }
})

let proxyValue = proxy.value;
console.log('Este es el proxy', proxyValue);

/**
 * Podemos crear un proxy que añade la propiedad 'fantasma' de convertir a json.
 * O tambien cuando se fije una propiedad y esta es string, que salte
 * O hacer algo cuando se llama a un metodo
 */
let proxy2 = new Proxy(obj, {
    get(target, key, receiver) {
        let prop = target[key];
        // Llamadas a metodos entraran por get
        if (typeof(prop) === 'function') {
            console.log('Se ha llamado al método',key);
            // hay que devolver una funcion que llama a la propia del objeto
            return function(...args) {
                let result = prop.apply(target, args);
                console.log(`${key}(${JSON.stringify(args)}) -> ${result != undefined ?  JSON.stringify(result) : undefined}`);
                return result;
            }
        }
        else {
            if (key === 'json')
                return JSON.stringify(target);
            else
                return target[key];
        }

    },
    set(target, key, receiver) {
        if (typeof (receiver) === 'string') {
            console.log('Se ha fijado la propiedad', key, 'que era un string');
            target[key] = receiver;
        }
    }
})

console.log('\nConvertido a json con el segundo proxy:', proxy2.json);
proxy2.property1 = 5; // Esto no cambia, porque el proxy lo impide
console.log('Intento de fijar property1 a 5:', obj);
proxy2.property2 = 'Hola'; // Este si cambia, porque el set es sobre un string
console.log('Intento de fijar property2 a hola:', obj); 
proxy2.sumProp1(10);
console.log('Intento de interceptar un metodo, que suma 10 a prop1', obj);