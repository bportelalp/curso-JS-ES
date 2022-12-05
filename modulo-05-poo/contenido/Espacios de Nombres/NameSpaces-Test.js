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