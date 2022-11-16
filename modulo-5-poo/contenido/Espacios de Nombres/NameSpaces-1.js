var CampusMVP = {
	Utilidades: {
		Cookies: {
			getCookie : function(nombre){
				alert("Obtener cookie " + nombre);
			},
			setCookie : function(nombre, valor) {
				alert("Almacenar cookie - "+ nombre + ": "+ valor);
			}
		}
	},
	Criptografia: {
		cifrar: function(datos, clave){
			alert("Se ha llamado a cifrar");
		}
	}
};

CampusMVP.Utilidades.Cookies.setCookie("Prueba", "Valor");
CampusMVP.Utilidades.Cookies.getCookie("Prueba");
CampusMVP.Criptografia.cifrar("Dato", "Clave");

debugger