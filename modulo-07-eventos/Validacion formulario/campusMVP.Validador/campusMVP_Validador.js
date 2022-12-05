///////////////////////////////////////////////////////////////////////////////////
// Biblioteca para validación automática de campos de formularios Web
// Creada por José Manuel Alarcón (www.jasoft.org)
// como ejemplo del curso "JavaScript profesional para desarrolladores y diseñadores web"
// de campusMVP (www.campusmvp.es)
//
// Licencia Creative Commons - CC BY (http://creativecommons.org/licenses/by/4.0/)
///////////////////////////////////////////////////////////////////////////////////
(function () {

	//Prefijo de los atributos de validación
	var PREFIJO = "data-val-";

	//Función que valida todos los campos de un formulario dado, verificando las reglas propias creadas con atributos
	//frm: el formulario a validar
	//mostrarMensajes: un booleano que indica si se debe mostrar o no la interfaz de validación por defecto. Si no se especifica no se mostrará.
	function _validaFormulario(frm, mostrarMensajes) {
		//Me aseguro de que el segundo parámetro tiene un booleano válido
		mostrarMensajes = !!mostrarMensajes;

		var res = true;	//supongo éxito en la validación
		for (var i = 0; i < frm.elements.length; i++) {
			var campo = frm.elements[i];
			if (!_validaCampo(campo, mostrarMensajes)) {	//Validamos cada campo individualmente
				//Si la validación del campo ha fallado
				//devolvemos falso como resultado de la validación
				res = false;
			}
		}
		//Añadimos o cambiamos la propiedad "esValido" del formulario, para indicar si ha validado el formulario completo o no
		frm.esValido = res;
		return res;
	};

	//Función que valida un campo determinado que se le pase como parámetro
	function _validaCampo(campo, mostrarMensaje) {
		var atributos = campo.attributes;
	    //Recorro los atributos del campo y verifico los que empiecen por el prefijo apropiado (PREFIJO) si los hay
		for (var i = 0; i < atributos.length; i++) {
			var nombre = atributos[i].name.toLowerCase();
			if (nombre.indexOf(PREFIJO) == 0)	//si empieza por el prefijo de los atributos de validación, es que es un atributo de validación y lo verificamos
				if (!_verificaAtributo(campo, atributos[i])) { //En caso de fracaso de la validación
					//Si así se ha indicado, mostramos el mensaje asociado
					if (mostrarMensaje) _muestraMensajeValidacion(campo);
					//Marcamos el campo como no válido con la propiedad "esValido"
					campo.esValido = false;
					return false;	//Si no tiene éxito la validación, indicamos el fracaso en el resultado
					//Salimos del bucle: ya no seguimos validando el resto de atributos del mismo campo (con que haya uno no válido, se muestra el mensaje)
				} else {
					//Si se ha validado correctamente quitamos el mensaje de validación en caso de estar habilitado
					if (mostrarMensaje) _quitaMensajeDeValidacion(campo);
					//Marcamos el campo como válido con la propiedad "esValido"
					campo.esValido = true;
				}
		}
		campo.esValido = true;
		return true;
	};


	//Verifica un determinado atributo de validación para un determinado campo
	function _verificaAtributo(campo, atributo) {
		//Llamo a la función apropiada en función del atributo que sea. Esto permite ampliar fácilmente los atributos de validación
		//No depende de mayúscula ni minúscula
		switch (atributo.name.toLowerCase()) {
			//Obligatorio
		    case PREFIJO + "obligatorio":
				return !_estaVacio(campo);  //Si no está vacío, cumple con lo de ser obligatorio rellenarlo
				break;
		    case PREFIJO + "longmin":
				return _longMinima(campo, atributo.value);
				break;
		    case PREFIJO + "longmax":
				return _longMaxima(campo, atributo.value);
				break;
		    case PREFIJO + "num":
				return _esNumero(campo);
				break;
		    case PREFIJO + "entero":
				return _esNumeroEntero(campo);
				break;
		    case PREFIJO + "fecha":
				return _esFecha(campo);
				break;
		    case PREFIJO + "rango":
				return _verificarRango(campo, atributo.value);
				break;
		    case PREFIJO + "rangofechas":
				return _verificarRangoFechas(campo, atributo.value);
				break;
		    case PREFIJO + "email":
				return _verificarEmail(campo);
				break;
		    case PREFIJO + "custom":
				return _llamarFuncionPersonalizada(campo, atributo.value);	//Aseguramos que se devuelve un booleano
				break;
			default:
			    //Parámetro no reconocido o parámetro informativo (como PREFIJO + "mensaje"): NO hacemos nada
				return true;
		}
	};

	//////////////////////////////////////////////////////////////////////////////////////////////////////
	// FUNCIONES DE VALIDACIÓN
	// Simplemente validan los campos y devuelve true o false según se haya pasado o no la validación.
	// No interfieren con la interfaz de usuario
	//////////////////////////////////////////////////////////////////////////////////////////////////////

	//Funcion que verifica si un campo del formulario es obligatorio o no
	function _estaVacio(campo) {
		var valor = campo.value.trim();
		return (valor == "");	//devuelve true si está vacío (no cuenta espacios al principio ni al final)
	};

	//Función que verifica que el campo tenga un valor entero con una longitud mínima
	function _longMinima(campo, valor) {
        if (_estaVacio(campo)) return true; //Si está vacío no se comprueba (ya se comprobará después en caso de ser obligatorio)
		valor = parseInt(valor, 10);	//El valor del atributo de validación debe ser numérico
		return (!isNaN(valor) && campo.value.length >= valor);
	};

	//Función que verifica que el campo tenga un valor entero que no supere una longitud máxima
	function _longMaxima(campo, valor) {
		valor = parseInt(valor, 10);	//El valor del atributo de validación debe ser numérico
		return (!isNaN(valor) && campo.value.length <= valor);
	};

	//Función que verifica si el valor de un campo es numérico o no
	function _esNumero(campo) {
        if (_estaVacio(campo)) return true; //Si está vacío no se comprueba (ya se comprobará después en caso de ser obligatorio)

		var valor = parseFloat(campo.value);
		if (isNaN(valor)) return false;	//Si no es un número ya no valida
		//Si es un número aún tiene que coincidir con el valor del campo (la covnersión hace caso omiso de los valores no válidos, por lo que no llega con ver si es numérico).
		return (valor.toString() == campo.value.trim());
	};

	//Función que verifica si el valor de un campo es un número entero o no
	function _esNumeroEntero(campo) {
        if (_estaVacio(campo)) return true; //Si está vacío no se comprueba (ya se comprobará después en caso de ser obligatorio)

		var valor = parseInt(campo.value, 10);
		if (isNaN(valor)) return false;	//Si no es un número ya no valida
		//Si es un número aún tiene que coincidir con el valor del campo (la covnersión hace caso omiso de los valores no válidos, por lo que no llega con ver si es numérico).
		return (valor.toString() == campo.value.trim());
	};

	//Función que verifica si el valor de un campo es una fecha o no
	function _esFecha(campo) {
        if (_estaVacio(campo)) return true; //Si está vacío no se comprueba (ya se comprobará después en caso de ser obligatorio)
		var valor = _convertirAFecha(campo.value);
		return !isNaN(valor);
	};

	//Verifica que el campo tenga un valor comprendido en el rango que se especifique, del tipo "0-100"
	function _verificarRango(campo, valor) {
        if (_estaVacio(campo)) return true; //Si está vacío no se comprueba (ya se comprobará después en caso de ser obligatorio)

		var rango = valor.split("-");
		if (rango.length != 2) return false;	//debe haber dos valores
		var min = parseFloat(rango[0]);	//Los valores deben ser numéricos (valen decimales)
		if (isNaN(min)) return false;
		var max = parseFloat(rango[1]);
		if (isNaN(max)) return false;
		//El valor del campo debe ser un número (esto es implícito a este tipo de validación)
		var val = parseFloat(campo.value);
		if (isNaN(val)) return false;
		//La validación propiamente dicha
		return (val >= min && val <= max);
	};

	//Verifica un rago de fechas separadas con guiones
	//Si solo se especifica uno, se comprueba solo el rango inferior
	function _verificarRangoFechas(campo, valor) {
        if (_estaVacio(campo)) return true; //Si está vacío no se comprueba (ya se comprobará después en caso de ser obligatorio)

		var rango = valor.split("-");
		var min = _convertirAFecha(rango[0]);	//Los valores deben ser fechas
		var max = null;	//El rango superior no es obligatorio
		if (isNaN(min)) return false;
		if (rango.length > 1) {
			max = _convertirAFecha(rango[1]);
			if (isNaN(max)) return false;	//Si esta debe ser válido
		}
		//El valor del campo debe ser una fecha (esto es implícito a este tipo de validación)
		var val = _convertirAFecha(campo.value);
		if (isNaN(val)) return false;
		//La validación propiamente dicha
		if (max != null) {
			return (val >= min && val <= max);
		} else {
			return (val >= min);
		}
	};

	//Verifica que el campo contenga un email válido
	function _verificarEmail(campo) {
        if (_estaVacio(campo)) return true; //Si está vacío no se comprueba (ya se comprobará después en caso de ser obligatorio)

		var valor = campo.value.trim();
		//Usaremos una expresión regular para validar que es un email.
		//La mayor parte de los emails se pueden validar así, pero no todos: http://www.regular-expressions.info/email.html
		return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(valor);
	};

	//Esta función ejecuta el código que se indica como función de validación personalizada.
	//La función debe estar declarada globalmente
	//Para facilitar su uso la ejecuta con el contexto (this) apuntando al campo que se está verificando
	//Detecta los posibles parámetros (de haberlos) y se los pasa a la función indicada (como cadenas, OJO).
	function _llamarFuncionPersonalizada(campo, valor) {
        if (_estaVacio(campo)) return true; //Si está vacío no se comprueba (ya se comprobará después en caso de ser obligatorio)

		//Analizamos la expresión, si es una función con paréntesis, separamos su nombre y sus parámetros
		//Usaré simples funciones de cadena para ello
		if (valor.length < 0) return false;
		var nomFunc, parametros = [];
		var posParentesis1 = valor.indexOf("("), posParentesis2 = valor.indexOf(")");
		if (posParentesis1 >= 0 && posParentesis2 >= 0 && posParentesis2 > posParentesis1) {
			nomFunc = valor.slice(0, posParentesis1);
			parametros = valor.slice(posParentesis1 + 1, posParentesis2).split(",");
		} else {
			nomFunc = valor;
		}
		//Verifico que es un simple nombre de función y que existe en el contexto global
		if (window[nomFunc])
			return window[nomFunc].apply(campo, parametros);	//Se le pasa el campo como contexto
		else
			return false;
	};

	///////////////////////////////////////////////////
	// FUNCIONES AUXILIARES
	///////////////////////////////////////////////////

	//Función auxiliar para ayudar a convertir fechas en texto a verdaderas fechas de JavaScript
	//Espera fechas en formato DD/MM/YY o DD/MM/YYYY (o sea, en formato Español).
	function _convertirAFecha(strFecha) {
		return new Date(strFecha.split('/').reverse().join('/'));	//Le damos la vuelta para que se interprete bien
	};

	//Añade una clase a las clases CSS aplicadas a un elemento
	//Si están soportadas usa las funciones estándar del W3C, sino lo hace "a pelo"
	function _addClass(elemento, clase) {
		if (elemento.classList) {
			elemento.classList.add(clase);
		} else {
			var re = new RegExp("\\b" + clase + "\\b");
			if (!re.test(elemento.className))	//Si NO tiene la clase aplicada, se la añadimos
				elemento.className += " " + clase;
		}
	};

	//Quita una clase de las clases CSS aplicadas a un elemento
	function _removeClass(elemento, clase) {
		if (elemento.classList) {
			elemento.classList.remove(clase);
		} else {
			var re = new RegExp("\\b" + clase + "\\b");
			//Le quitamos la clase si es necesario
			elemento.className.replace(re, "");
		}
	};

    //Extrae el mensaje asociado (de haberlo) a partir de un campo (PREFIJO + mensaje)
	function _extraerMsgCampo(campo) {
	    if (campo.attributes[PREFIJO + "mensaje"])
	        return campo.attributes[PREFIJO + "mensaje"].value;
		else
			return "";	//Si no hay mensaje asociado, por defecto va en blanco (podríamos poner cualquier otra cosa, por ejemplo un asterisco
	}

	//Se encarga de crear la etiqueta con el mensaje de validación como último elemento del padre del campo validado
	function _muestraMensajeValidacion(campo) {

		//Se extrae el mensaje asociado al campo (de haberlo)
		var msgVal = _extraerMsgCampo(campo);

	    //Marcamos el campo con la clase CSS PREFIJO + "NoValido"
		_addClass(campo, PREFIJO + "NoValido");

		//Si no está ya, añado una etiqueta con la información de error
		if (campo.parentNode.getElementsByClassName(PREFIJO + "mensaje").length == 0) {
			var spanMsg = document.createElement("span");
			spanMsg.className = PREFIJO + "mensaje";
			spanMsg.textContent = msgVal;
			campo.parentNode.appendChild(spanMsg);
		}
	};

	//Retira las muestras visbles de que el campo no ha validado correctamente
	function _quitaMensajeDeValidacion(campo) {
	    _removeClass(campo, PREFIJO + "NoValido");
		//Quitamos los mensajes (de haberlos)
	    var spansMsg = campo.parentNode.getElementsByClassName(PREFIJO + "mensaje");
		for (var i = 0; i < spansMsg.length; i++) {
			campo.parentNode.removeChild(spansMsg[i]);
		}
	};

	///////////////////////////////////////////////////
	// OBJETO QUE ENCAPSULA LA FUNCIONALIDAD
	///////////////////////////////////////////////////
	//Si no existe el "espacio de nombres" campusMVP, lo creamos
	if (!window.campusMVP) window.campusMVP = {};
	//Si no existe ya un objeto "Validador" en la ventana, lo asigno, con los métodos auxiliares necesarios
	if (!window.campusMVP.Validador) {
		window.campusMVP.Validador = {
			validaCampo: _validaCampo,
			validaFormulario: _validaFormulario,
			getMensajeValidacion: _extraerMsgCampo
		};
	}
})();