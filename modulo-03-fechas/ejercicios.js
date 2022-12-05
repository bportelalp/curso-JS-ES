/*
Crea una función de calendario perpetuo que al pasarle una fecha te diga en qué día de la semana cae,
 pudiéndole pasar cualquier fecha del pasado o del futuro. El día deberá devolverlo en formato textual,
  es decir, Lunes, Martes, etc... Una pregunta interesante que debes plantearte: ¿ocurrirá algo extraño si le 
  pasas una fecha anterior al epoch, es decir, anterior a 1972? Prueba con la fecha del descubrimiento de América,
   a ver si te dice en qué día de la semana cayó
*/
console.log('\nEjercicio 1');
const date = new Date('2022/11/15 20:00:00 GMT+1')
console.log('Fecha introducida: ', date.toLocaleString());

const getDayString = (date = new Date()) => {
    const days = ['lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado', 'domingo'];
    return days[date.getDay() - 1]
}

console.log('Día de la semana: ', getDayString(date));

const dateAmerica = new Date(1492, 10, 12)
console.log('Fecha america: ', dateAmerica.toLocaleString());
console.log('Día de la semana america: ', getDayString(dateAmerica));

/* 
Crea una función capaz de convertir una cadena con la fecha y hora en formato corto como este 
"dd/mm/yyyy hh:mm:ss", en una variable de tipo fecha en JavaScript. Esta función implica sobre 
todo el procesamiento de cadenas con una posterior conversión a fecha partiendo de sus partes. 
Ten en cuenta que puede faltar la hora o la propia fecha (ser solo la hora, pero sin fecha delante, 
con lo cual sería el día de hoy a esa hora), y que el año podría estar expresado con 2 o 4 números. 
Recomendación: utilizar expresiones regulares para analizar la cadena y validarla.
*/
// TODO
const createDate = (cadena = '') => {
    const splitted = cadena.split(' ');
    let date = '';
    let time = '';
    if (splitted.length == 2) {
        date = splitted[0];
        time = splitted[1];
    }
    else if (splitted[0].includes('/'))
        date = splitted[0];
    else if (splitted[0].includes(':'))
        time = splitted[0];
}


/*
Crea una función llamada dateAdd que permita sumar cualquier intervalo a una fecha
*/
console.log('\nEjercicio 3');
const dateCalc = new Date();
const dateAdd = (interval = '', amount = 0, date = new Date()) => {
    if (typeof (amount) != 'number')
        throw Error('No es un numero!')
    if (!date instanceof Date)
        throw Error('No es una fecha')
    const result = new Date(date.getTime());
    switch (interval.toLowerCase()) {
        case 'y':
            result.setFullYear(result.getFullYear() + amount);
            break;
        case 'm':
            result.setMonth(result.getMonth() + amount);
            break;
        case 'w':
            result.setDate(result.getDate() + 7 * amount);
            break;
        case 'd':
            result.setDate(result.getDate() + amount);
            break;
        case 'h':
            result.setHours(result.getHours() + amount);
            break;
        case 'mm':
            result.setMinutes(result.getMinutes() + amount);
            break;
        case 's':
            result.setSeconds(result.getSeconds() + amount);
            break;
        case 'ms':
            result.setMilliseconds(result.getMilliseconds() + amount);
            break;
        default:
            throw Error('No es correcto el identificador')
    }
    return result;
}

console.log('Fecha original:   ', dateCalc.toLocaleString());
console.log('Fecha + 3 años:   ', dateAdd('y', 3, dateCalc).toLocaleString());
console.log('Fecha + 3 meses:  ', dateAdd('m', 3, dateCalc).toLocaleString());
console.log('Fecha - 50 dias:  ', dateAdd('d', -50, dateCalc).toLocaleString());
console.log('Fecha + 48 horas: ', dateAdd('h', 48, dateCalc).toLocaleString());
console.log('Fecha + 80 minut: ', dateAdd('mm', 80, dateCalc).toLocaleString());
console.log('Fecha - 3600 sec: ', dateAdd('s', -3600, dateCalc).toLocaleString());
console.log('Fecha + 50000 ms: ', dateAdd('ms', 5000, dateCalc).toLocaleString());



