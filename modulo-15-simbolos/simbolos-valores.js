/*
 Una funcion que abre y cierra un canal
*/

/*
El estado es una cadena, pero mejor seria usar simbolos para los estados que son A, C. En este caso
los simbolos se comportan algo asi como enumerados
 */

let handleStatus = {
    Abierto: Symbol("A"),
    Cerrado: Symbol("C")
}

let handle = function (name) {
    let _name = name;
    let _status = handleStatus.Cerrado;

    return {
        get name() { return _name },
        get status() { return _status },
        open() {
            if (_status === handleStatus.Cerrado) {
                console.log('Abriendo ', name);
                _status = handleStatus.Abierto;
            }
            else {
                console.log('El elemento ya está abierto');
            }
        },
    }
}

let canal = handle('Conexion OPC');

console.log('\nHe creado un handler llamado: ', canal.name);
canal.name = 'OPC Editado'
console.log('No puedo editar el nombre desde fuera: ', canal.name);
console.log('El estado actual es... ', canal.status);
console.log('Puedo abrirlo...');
canal.open();
console.log('E intentar abrirlo cuando ya está abierto...');
canal.open();

/*
Pero los estados no son valores unicos, por lo que usar simbolos
*/

