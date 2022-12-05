var sendJsonpRequest = (function () {
    var queryScript;

    //Se encarga de hacer una llamada mediante JSONP al URL indicado con la función de callback especificada
    return function (url, callback, error, nomparam) {
        if (!nomparam)
            nomparam = "callback";
        var separador = "?";    //El separador del parámetro
        //Verifico si el URL tiene ya un "?" o no
        if (url.indexOf("?") >= 0)
            separador = "&";

        var head = document.getElementsByTagName("head")[0];
        if (queryScript) {
            head.removeChild(queryScript);
        }
        queryScript = document.createElement("script");
        // se le añade el nombre de la función de callback a la URL habitual (generalmente se llaman callback)
        queryScript.src = url + separador + nomparam + "=" + callback;
        //Si hay manejador para el error, se asigna
        if (error)
            queryScript.onerror = error;

        head.appendChild(queryScript);
    };
})();