let lost = function*() {
    yield 4;
    yield 8;
    yield 16;
    yield 23;
    yield 42;
}

let lostExtended = function*(){
    yield 100;
    yield 200;
    yield* lost(); // Esto llama al otro generador, devolviendo el iterador
    yield 300;
    yield 400;
}

for (const value of lostExtended()) {
    console.log('Valor:', value);
}