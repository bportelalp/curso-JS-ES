/**
 * Función anónima autoejecutable con RevealingModulePattern para ocultar _data del objeto
 */
const repo = (() => {
    let _data = [];

    let repo = {
        add(value) {
            _data.push(value)
        },
        [Symbol.iterator]: function*() {
            // Con yield se van devolviendo uno tras otro
            for (let idx = 0; idx < _data.length; idx++) { //Aqui tambien podriamos usar for-of al ser _data un array
                yield _data[idx];
            }
        }
    }
    return repo;
})();
repo.add(10)
repo.add(30);

for (const item of repo) {
    console.log(item);
}