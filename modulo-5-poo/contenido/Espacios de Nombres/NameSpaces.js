//Módulo que añade la funcionalidad de NameSpaces  al objeto Global
//y a los objetos la capacidad de añadir funciones sin problema de sobrescribirlas
(function(){
	//Función para definición de espacios de nombres (evito redefinición)
	window.definirNS = window.definirNS || function(nomNS) {
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
	Object.prototype.defFunc = Object.prototype.defFunc || function(nombre, func){
		//Lo dejamos solamente para funciones (aunque valdría para asignar cualquier miembro nuevo)
		if (typeof(func) != "function")
			throw new Error("¡Estás intentando asignar algo que no es una función!");
		//Comprobamos primero que no exista
		if (this[nombre])	//Si existe ya, lanzamos un error
			throw new Error("¡Intento de redefinir una función existente!");
		else
			this[nombre] = func;
	};
})();
