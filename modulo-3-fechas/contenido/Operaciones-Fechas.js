function alert(msg) {
	WScript.echo(msg);
}

var base = new Date(2010, 0, 1); // 1/1/2010
var hoy = new Date();

//Se pueden comparar con los operadores habituales
// alert(hoy>base);
// alert(hoy<base);
// alert(hoy==base);

//Al restarlas se utilizan los ms
// var diferencia = (hoy-base);
// alert(diferencia);
// alert(new Date(diferencia)); //Una fecha unos a�os posteriores al 1 de enero de 1972

//Diferencia en d�as
// var difDias = diferencia/(1000*3600*24);
// alert(difDias);

//Diferencia en meses
// var difMeses = diferencia/(1000*3600*24*30);
// alert(difMeses);

//Diferencia en a�os
// var difAnios = diferencia/(1000*3600*24*365);
// alert(difAnios);

//Sumar x d�as a una fecha
// alert(new Date(hoy.setDate(hoy.getDate()+5)));

//Sumar x segundos a la fecha actual
// alert(new Date(hoy.setSeconds(hoy.getSeconds()+30)));

//Con setTime podemos sumar milisegundos
// alert(new Date(hoy.setTime(hoy.getTime()+30000)));

//M�todo parse devuelve milisegundos para poder operar con ellos
// alert(Date.parse(hoy));

//funci�n gen�rica de suma de fechas dateAdd
//intervalos v�lidos: y, m, w, d, h, mm, s, ms
function dateAdd(intervalo, numero, fecha){
	//me aseguro de que es una fecha
	if ( !esFecha(fecha))
		 return NaN;
	//y de que el n�mero es un n�mero v�lido
	if ( parseInt(numero) != numero) 
		return NaN;
	
	var intervalos = { 	ms: 1,
						s: 1000,
						mm:1000*60,
						h: 1000*60*60,
						d: 1000*60*60*24,
						w: 1000*60*60*24*7,
						m: 1000*60*60*24*30,
						y: 1000*60*60*24*365
					 };
	//Intervalo en min�sculas siempre (por si lo ponen en may�sculas)
	intervalo = intervalo.toLowerCase();

	var res = fecha.setTime(fecha.getTime() + numero*intervalos[intervalo] );
	//Alternativa con parse
	//var res = Date.parse(fecha) + numero*intervalos[intervalo];
	
	//Devuelvo el resultado sumando el intervalo en milisegundos
	return new Date(res)
}

// alert(dateAdd("d", 1, hoy));

function esFecha(fecha){
		return (fecha instanceof Date);
}

//intervalos v�lidos: y, m, w, d, h, mm, s, ms
function dateDiff(intervalo, f1, f2){
	//me aseguro de que son fechas
	if ( !esFecha(f1) || !esFecha(f2) )
		 return NaN;
	
	var intervalos = { 	ms: 1,
						s: 1000,
						mm:1000*60,
						h: 1000*60*60,
						d: 1000*60*60*24,
						w: 1000*60*60*24*7,
						m: 1000*60*60*24*30,
						y: 1000*60*60*24*365
					 };
	//Intervalo en min�sculas siempre (por si lo ponen en may�sculas)
	intervalo = intervalo.toLowerCase();
	
	//me aseguro de que la segunda es mayor que la primera, y si no les doy la vuelta para restarlas
	var diferencia = 0;
	if (f2>f1)
		diferencia = (f2-f1);
	else
		diferencia = (f1-f2);

	//Devuelvo el resultado dividiendo entre el intervalo
	return diferencia/intervalos[intervalo];
}

//alert(dateDiff("y", base, hoy));