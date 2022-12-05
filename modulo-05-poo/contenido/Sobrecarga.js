// Sobrecarga de funciones

function sumaNumeros() {
    var parcial = 0;
    for (var i = 0; i < sumaNumeros.arguments.length; i++) {
        var n = parseInt(sumaNumeros.arguments[i], 10);
        if (!isNaN(n)) {
            parcial += n;
        }
    }
    return parcial;
}

alert(sumaNumeros(1, 2, 3, 4, 5, "cualquier cosa", "6", 7, 8, 9));