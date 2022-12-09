
// Como iterador
let fibonacci = {
    [Symbol.iterator]() {
        let pre = 0, cur = 1;
        return {
            next() {
                [pre, cur] = [cur, pre + cur];
                return { done: false, value: cur }
            }
        }
    }
}

// Como iterador con generador
let fibonacciWithGen = {
    [Symbol.iterator]: function* () {
        let pre = 0, cur = 1;
        for (; ;) {
            [pre, cur] = [cur, pre + cur];
            yield cur;
        }
    }
}

// Como generador como objeto, en realidad ahora basta con llamar a fibo() para obtenerla
var fibo = function*() {
    let pre = 0, cur = 1;
    for (;;) {
        [pre, cur] = [cur, pre + cur];
        yield cur;
    }
};


const generateSeries = (max, iterator) => {
    let fibonacciSeries = [];
    for (var n of iterator) {
        if (n > max)
            break;
        fibonacciSeries.push(n);
    }
    return fibonacciSeries;
}

// let serie5000 = generateSeries(5000, fibonacci);
// let serie5000 = generateSeries(5000, fibonacciWithGen);
let serie5000 = generateSeries(5000, fibo())
console.log(serie5000);
