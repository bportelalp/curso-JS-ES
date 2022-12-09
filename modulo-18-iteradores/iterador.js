/**
 * Función anónima autoejecutable con RevealingModulePattern para ocultar _data del objeto
 */
const repo = (() => {
    let _data = [];

    let repo = {
        add(value) {
            _data.push(value)
        },
        [Symbol.iterator]() {
            let idx = 0;
            return {
                next: () => {
                    let current = _data[idx];
                    idx++;
                    return {
                        value: current,
                        done: idx > _data.length
                    }
                }
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