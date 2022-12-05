const base = new Date(2010, 0, 1) //1/1/2010
const now = new Date();

console.log('\nOperaciones con fechas');
console.log('Hoy es mayor que la fecha', now > base);
// El operador + concatena su valor string, porque no tiene mucho sentido
// la resta es directa
const diffMS = now - base;
const diffDias = diffMS / (24 * 3600 * 1000);
console.log('Diferencia entre fechas (en días): ', diffDias);
const diffMonths = diffDias / 30;
console.log('Diferencia entre fechas (en meses): ', diffMonths);

// sumar unidades de tiempo a fechas, hay metodos Get<unidad> y set<unidad> para añadir cantidads de manera indirecta
const baseSumada = new Date(base.getTime()); // Para clonar y que no afecte a la original
baseSumada.setDate(baseSumada.getDate() + 5)
console.log('Fecha original: ', base.toLocaleDateString());
console.log('Fecha + 5 dias: ', baseSumada.toLocaleDateString());
