let foo = function(...values) {
    let result = 0;
    values.forEach(s => result += s);       
    console.log('Sum of values is ' + result);
}

let proxy = new Proxy(foo, {
    apply(target, thisArg, argumentsList) {
        let args = argumentsList.map(arg => typeof(arg) === "number" ? arg : 0);
        return target.apply(thisArg, args);
    }
});

/**
 * El proxy se asegura de omitir de la funcion todos los valores que no sean numéricos para hacer la suma
 */

console.log('Foo standalonde:');
foo(10,20,"30");
console.log('Foo con proxy');
proxy(10,20,"30");

console.log('\nTambien se puede usar con apply y call');
proxy.apply(undefined, [10, 20, "30"]); //En este caso this no nos importa