//Función para definición de espacios de nombres
function definirNS(nomNS) {
	//Separo los espacios de nombres a través del punto
	var nombres = nomNS.split(".");
	var base = window; //Se empieza a definir a partir del objeto global
	//Se recorren para ir creando los sub-objetos que definen la ruta completa, variando el padre
	for(var i = 0; i< nombres.length; i++){
		var nodoActual = nombres[i];
		base[nodoActual] = base[nodoActual] || {};		//Lo añade solo si no existe previamente
		base = base[nodoActual];
	}
}

//Extiendo Object con una función para añadir funciones
//que compruebe previamente su existencia
Object.prototype.defFunc = function(nombre, func){
	//Lo dejamos solamente para funciones (aunque valdría para asignar cualquier miembro nuevo)
	if (typeof(func) != "function")
		throw new Error("¡Estás intentando asignar algo que no es una función!");
	//Comprobamos primero que no exista
	if (this[nombre])	//Si existe ya, lanzamos un error
		throw new Error("¡Intento de redefinir una función existente!");
	else
		this[nombre] = func;
};

//Creo un espacio de nombres para agrupar funciones
definirNS("CampusMVP.Utilidades.Cookies");
//Definimos las funciones que queremos añadir al espacio de nombres 
//(aunque en realidad en los espacios de nombres se suelen agrupar clases que instanciamos, no solo funciones)
CampusMVP.Utilidades.Cookies.defFunc("getCookie", 
										function(nombre){
											alert("Obtener cookie " + nombre);
										});
CampusMVP.Utilidades.Cookies.defFunc("setCookie", 
										function(nombre, valor){
											alert("Almacenar cookie - "+ nombre + ": "+ valor);
										});
//Otro espacio de nombres para agrupar funciones de criptografía
definirNS("CampusMVP.Criptografia");
CampusMVP.Criptografia.defFunc("cifrar",
									function(datos, clave){
										alert("Se ha llamado a cifrar");
									});

CampusMVP.Utilidades.Cookies.setCookie("Prueba", "Valor");
CampusMVP.Utilidades.Cookies.getCookie("Prueba");
CampusMVP.Criptografia.cifrar("Dato", "Clave");
debugger