let Perro = function (r) {
    this.raza = r;
    this.ladrar = function () {
        console.log('Guau!');
    }
}

let perroTerrier = new Perro("Terrier");
console.log('\nCrear perro de raza terrier: ', perroTerrier);
console.log(perroTerrier.raza,' ladra: ');
perroTerrier.ladrar();

let perroBulldog = new Perro("Bulldog");
console.log('\nCrear perro de raza Bulldog: ', perroBulldog);
console.log(perroBulldog.raza,' ladra: ');
perroBulldog.ladrar();

/*Cada perro tiene sus propiedades porque llamamos a Perro con new (funcion constructora) 

Pero se puede hacr lo mismo sin llamar a new. Pero sin new no devueve ningun objeto, por lo que this.raza ahora se situa
en el ambito global
*/
let perro3 = Perro('Perro Global');
console.log('\nCrear perro global: ', perro3);
//console.log(perro3.raza,' ladra: '); // Genera error
//perro3.ladrar(); //Genera error
console.log(raza,' ladra: ');
ladrar();

/*
Pero se puede hacer que sin usar new, se genere en el objeto global
*/
let PerroSinNew = function (r) {
    // Ahora al devolver un objeto, raza y ladrar como objeto global se pierde, lo elimina el GC
    this.raza = r;
    this.ladrar = function () {
        console.log('Guau!');
    }

    return {
        raza: r,
        ladrar: this.ladrar,
    }
}

let perroLabrador = PerroSinNew('Labrador');
console.log('\nCrear perro labrador: ', perroLabrador);
//console.log(perro3.raza,' ladra: '); // Genera error
//perro3.ladrar(); //Genera error
console.log(perroLabrador.raza,' ladra: ');
perroLabrador.ladrar();