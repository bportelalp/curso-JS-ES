var IMDB_API_URL = "http://www.omdbapi.com/";
var IMDB_API_KEY = "be50bfe7";

function hacerBusqueda() {
	var titPelicula = document.getElementById("titPelicula").value;
	if (titPelicula.trim() == "") {
		alert("Introduzca el título de una película para buscarla en la Internet Movie DataBase");
		document.getElementById("titPelicula").focus();
	}

	sendJsonpRequest(IMDB_API_URL + "?apikey=" + IMDB_API_KEY + "&s=" + titPelicula, "mostrarResultadosBusquedaCallback", error404);
}

function titPelicula_OnEnter(event) {
	event = EventHandlerHelper.fixEvent(event);
	if (event.which == 13)
		hacerBusqueda();
}

//Muestra resultados de búsqueda (función callback de JSONP)
function mostrarResultadosBusquedaCallback(resultados) {
	var resHTML = "";
	
	if (!resultados.Search || resultados.Search.length == 0){
		resHTML = "<span>¡¡No hay películas con este título!!</span>";
	}
	else {
		for(var i = 0; i<resultados.Search.length; i++) 
		{
			var res = resultados.Search[i];
			resHTML += "<p data-imdbid='" + res.imdbID + "' onclick='mostrarInfoPeli(this);'>" + res.Title + "(" + res.Year + ") - " + res.Type + "</p>";
		}
	}
	document.getElementById("resBusqueda").innerHTML = resHTML;
	ocultarDetalles();
}

//Si no se encuentra la API
function error404()
{
	document.getElementById("resBusqueda").innerHTML = "<span>¡¡Error al conectar con la API!!</span>";
	ocultarDetalles();
}

//Muestra info de la película a partir de un identificador
//Se le pasa el elemento sobre el que se ha pulsado
function mostrarInfoPeli(elto) {
	var idPelicula = elto.attributes["data-imdbid"].value;
	//Desmarco las que hubiese seleccionadas
	var seleccionados = document.getElementsByClassName("seleccionado");
	for(var i = 0; i< seleccionados.length; i++) {
		seleccionados[i].className = "";
	}
	//La marco como seleccionada
	elto.className = "seleccionado";
	//Pido la info sobre la película
	sendJsonpRequest(IMDB_API_URL + "?apikey=" + IMDB_API_KEY + "&i=" + idPelicula, "mostrarInfoPeliculaCallback", error404);
}

//Muetra información de una película (función callback de JSONP)
function mostrarInfoPeliculaCallback(peli){
	if (peli != null && !peli.Error)
	{
		//Asignamos a mano la imagen
		if (peli.Poster == "N/A")
			document.getElementById("imgCaratula").style.visibility= "hidden";
		else {
			document.getElementById("imgCaratula").src = peli.Poster;
			document.getElementById("imgCaratula").style.visibility= "visible";
		}
		//Ahora asignamos el resto de los campos
		enlazarCamposConDOM(peli);
		mostrarDetalles();
	}
}

//Se encarga de localizar campos en la página con el mismo nombre que campos de un objeto que se le pasa, e introduce su valor como contenido en cada uno de ellos
function enlazarCamposConDOM(obj) {
	//Si no se pasa un elemento concreto del DOM a partir del cual buscar, se usa document y se busca en toda la página
    //Se recorren las propiedades del objeto
	for (prop in obj) {
		//Verificamos si existe un elemento con el mismo id que la propiedad
		var e = document.getElementById(prop);
		if (e != null) {
				e.textContent = obj[prop];	//Asignamos el valor como contenido de texto
		}
    }

}

//Mostrar detalles película
function mostrarDetalles(){
	document.getElementById("detalle").style.display= "block";
}

//Ocultar detalles película
function ocultarDetalles(){
	document.getElementById("detalle").style.display= "none";
}

function initialize() {
	EventHandlerHelper.addEventListener(document.getElementById("cmdGetInfo"), "click", hacerBusqueda);
	EventHandlerHelper.addEventListener(document.getElementById("titPelicula"), "keyup", titPelicula_OnEnter);
}

window.onload = initialize;