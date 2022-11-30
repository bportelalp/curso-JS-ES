/*El valor de this dentro de una función dependía del contexto. Es
un poco complicado porque una definida en ambito global apunta a window */

function Foo(value) {
    // this vale diferente segun como se llame
    this.property = value;
}

// Asignacion global 
Foo(100);
console.log('Asigacion global');
console.log('Valor global --> ', property);
console.log('Valor en object --> object.property genera error');
// asignación en un objeto
let objNew = new Foo(200);
console.log('\nAsigacion a objeto con new');
console.log('Valor global --> ', property);
console.log('Valor en objNew -->', objNew.property);

/*Call llama a una funcion asignando el contexto */
let objCall = {};
Foo.call(objCall, 300)
console.log('\nAsigacion a objeto con call');
console.log('Valor global --> ', property);
console.log('Valor en objNew -->', objNew.property);
console.log('Valor en objCall -->', objCall.property);

/*apply es equivalente pero con array de parametros */
let objApply = {};
Foo.apply(objApply, [400])
console.log('\nAsigacion a objeto con apply');
console.log('Valor global --> ', property);
console.log('Valor en objNew -->', objNew.property);
console.log('Valor en objCall -->', objCall.property);
console.log('Valor en objApply -->', objApply.property);

/*Bind genera una nueva funcion con el contexto asignado, así siempre tendria ese contexto. 
Sólo se puede asignar una vez*/
let objBind = {}
let FooBinded = Foo.bind(objBind);
FooBinded(500);
console.log('\nAsigacion a objeto con bind');
console.log('Valor global --> ', property);
console.log('Valor en objNew -->', objNew.property);
console.log('Valor en objCall -->', objCall.property);
console.log('Valor en objApply -->', objApply.property);
console.log('Valor en objBind -->', objBind.property);

let objNotBinded = {};
let FooNotBinded = Foo.bind(objNotBinded);
FooNotBinded(600);

console.log('\nAsigacion a objeto despues de que ya se hiciera bind. Esto igual no funciona en NodeJS?');
console.log('Valor global --> ', property);
console.log('Valor en objNew -->', objNew.property);
console.log('Valor en objCall -->', objCall.property);
console.log('Valor en objApply -->', objApply.property);
console.log('Valor en objBind -->', objBind.property); //Porque esto deberia ser 600 segun el video
console.log('Valor en objNotBinded -->', objNotBinded.property); // y esto undefined
