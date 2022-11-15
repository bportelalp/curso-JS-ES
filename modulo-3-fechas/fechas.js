console.log('\nGenerar una fecha actual');
const now = new Date();
console.log('Fecha y hora actuales utc: ', now);
console.log('Fecha y hora local:        ', now.toLocaleString());
console.log('Fecha local:               ', now.toLocaleDateString());
console.log('Hora local:                ', now.toLocaleTimeString());


// Generar una fecha
console.log('\nGenerar una fecha arbitraria');
const date = new Date(1972, 4, 12, 12, 30); // OJO los meses cuentan desde 0, los dias no (cosa particular de JS)
// se podria poner un 72 asecas, lo asumiría como el siglo XX. new Date(72, 4, 12, 12, 30)
// tambien si pones un mes 13 (o 12) intentará hacerlo congruente, sería como seguir al año siguiente.
console.log('Fecha y hora actuales utc: ', date);
console.log('Fecha y hora local:        ', date.toLocaleString());
console.log('Fecha local:               ', date.toLocaleDateString());
console.log('Hora local:                ', date.toLocaleTimeString());


console.log('\nGenerar una fecha con cadena de texto');
const dateString = new Date("Feb 12, 2015 22:15:45 UTC+5"); // en formato ingles
console.log('Fecha y hora actuales utc: ', dateString);
console.log('Fecha y hora local:        ', dateString.toLocaleString());
console.log('Fecha local:               ', dateString.toLocaleDateString());
console.log('Hora local:                ', dateString.toLocaleTimeString());


console.log('\nComprobar si tiene una fecha');
const f1 = new Date();
const f2 = 345;
const f3 = "una cadena"

// el operador instanceof es equivalente a saber si es de un determinado. Equivalente a date.GetType() == typeof(DateTime)
const isDate = (date = new Date()) => date instanceof Date;
console.log('Variable f1 es decha? ', isDate(f1));
console.log('Variable f2 es decha? ', isDate(f2));
console.log('Variable f3 es decha? ', isDate(f3));
