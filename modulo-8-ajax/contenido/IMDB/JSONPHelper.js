var sendJsonpRequest = (function () {
    var queryScript;

    //Se encarga de hacer una llamada mediante JSONP al URL indicado con la funci�n de callback especificada
    return function (url, callback, error, nomparam) {
        if (!nomparam)
            nomparam = "callback";
        var separador = "?";    //El separador del par�metro
        //Verifico si el URL tiene ya un "?" o no
        if (url.indexOf("?") >= 0)
            separador = "&";

        var head = document.getElementsByTagName("head")[0];
        if (queryScript) {
            head.removeChild(queryScript);
        }
        queryScript = document.createElement("script");
        // se le a�ade el nombre de la funci�n de callback a la URL habitual (generalmente se llaman callback)
        queryScript.src = url + separador + nomparam + "=" + callback;
        //Si hay manejador para el error, se asigna
        if (error)
            queryScript.onerror = error;

        head.appendChild(queryScript);
    };
})();