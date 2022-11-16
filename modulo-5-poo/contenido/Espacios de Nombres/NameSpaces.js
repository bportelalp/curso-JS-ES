//M�dulo que a�ade la funcionalidad de NameSpaces  al objeto Global
//y a los objetos la capacidad de a�adir funciones sin problema de sobrescribirlas
(function(){
	//Funci�n para definici�n de espacios de nombres (evito redefinici�n)
	window.definirNS = window.definirNS || function(nomNS) {
		//Separo los espacios de nombres a trav�s del punto
		var nombres = nomNS.split(".");
		var base = window; //Se empieza a definir a partir del objeto global
		//Se recorren para ir creando los sub-objetos que definen la ruta completa, variando el padre
		for(var i = 0; i< nombres.length; i++){
			var nodoActual = nombres[i];
			base[nodoActual] = base[nodoActual] || {};		//Lo a�ade solo si no existe previamente
			base = base[nodoActual];
		}
	}

	//Extiendo Object con una funci�n para a�adir funciones
	//que compruebe previamente su existencia
	Object.prototype.defFunc = Object.prototype.defFunc || function(nombre, func){
		//Lo dejamos solamente para funciones (aunque valdr�a para asignar cualquier miembro nuevo)
		if (typeof(func) != "function")
			throw new Error("�Est�s intentando asignar algo que no es una funci�n!");
		//Comprobamos primero que no exista
		if (this[nombre])	//Si existe ya, lanzamos un error
			throw new Error("�Intento de redefinir una funci�n existente!");
		else
			this[nombre] = func;
	};
})();
