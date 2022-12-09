let repo = {
    _data: [],
    add(value) {
        this._data.push(value)
    },

    [Symbol.iterator]() {
        let idx = 0;
        return {
            next: () => {
                let current = this._data[idx];
                idx++;
                return {
                    value: current,
                    done: idx > this._data.length
                }
            }
        }
    }
}

repo.add(10)
repo.add(30);

for (const item of repo) {
    console.log(item);
}