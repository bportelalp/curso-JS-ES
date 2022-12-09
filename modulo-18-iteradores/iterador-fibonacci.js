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

const generateSeries = (max) => {
    let fibonacciSeries = [];
    for (var n of fibonacci) {
        if (n > max)
            break;
        fibonacciSeries.push(n);
    }
    return fibonacciSeries;
}

let serie5000 = generateSeries(5000);
console.log(serie5000);
