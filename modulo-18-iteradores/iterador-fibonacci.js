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

let fibonacciWithGen = {
    [Symbol.iterator]: function* () {
        let pre = 0, cur = 1;
        for (; ;) {
            [pre, cur] = [cur, pre + cur];
            yield cur;
        }
    }
}

const generateSeries = (max) => {
    let fibonacciSeries = [];
    for (var n of fibonacciWithGen) {
        if (n > max)
            break;
        fibonacciSeries.push(n);
    }
    return fibonacciSeries;
}

let serie5000 = generateSeries(5000);
console.log(serie5000);
