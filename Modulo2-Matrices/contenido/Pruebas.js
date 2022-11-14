//var coche1 = "Porsche";
//var coche2 = "Audi";
//var coche3 = "Volkswagen";

//var coches = new Array();
//var coches = [];
//coches[0] = "Porsche";
//coches[1] = "Audi";
//coches[2] = "Volkswagen";

//alert(coches[1]);
//coches.length = 2;
//alert(coches[2]);

//for (var i = 0; i < coches.length; i++) {
//    alert(coches[i]);
//}

//for (var coche in coches) {
//    alert(coches[coche]);
//}

// INICIALIZACIÓN
//var coches = new Array("Audi", "Porsche", "Volkswagen");
//var coches = ["Audi", "Porsche", "Volkswagen"];
//alert(coches[1]);

//var miMatriz = ["cadena", 5, true];
//alert(miMatriz[1]);

//var dimension1 = ["00", "01", "02"];
//var dimension2 = ["10", "11", "12"];
//var matriz2D = [dimension1, dimension2];
//alert(matriz2D[1][2]);

// EJEMPLO 1
//function generaAlfabeto() {
//    var n;
//    n = parseInt(prompt("¿Cuántas letras del alfabeto deseas introducir en la matriz (1-26)?", "26"));

//    //Comprobamos que nos han introducido un número
//    if (isNaN(n) == true)
//        return "¡Cancelado!";

//    //Compruebo que el número introducido está en rango
//    if (n < 1) n = 1;
//    if (n > 26) n = 26;

//    var alfabeto = new Array(n);
//    for (var i = 0; i < n; i++) {
//        alfabeto[i] = String.fromCharCode(65 + i);
//    }

//    return alfabeto;
//}

//alert(generaAlfabeto());

// MATRICES ASOCIATIVAS

//var coches = [];
//coches["Alemanes"] = ["Audi", "Volkswagen", "Porsche"];
//coches["Franceses"] = ["Renault", "Citroën"];
//coches["Italianos"] = ["Fiat", "Alfa Romeo", "Ferrari"];

//alert(coches["Alemanes"]);
//alert(coches.Alemanes);

//alert(coches[0]);

// MÉTODOS - MANIPULACIÓN DE ELEMENTOS
//var mEjemplo = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
//alert(mEjemplo.join("--"));

//var matriz1 = [1, 2, 3];
//var matriz2 = [4, 5, 6];
//var siete = 7;
//var ocho = "ocho";

//var nuevaMatriz = matriz1.concat(matriz2, siete, ocho);
//alert(nuevaMatriz);

//var subconjunto = nuevaMatriz.slice(3, 5);
//alert(subconjunto);

//var miMatriz = [1, 2, 3, 4];
//var otra = miMatriz.slice();
//otra[1] = 5;
//alert(miMatriz[1]);

//var matriz3 = [1, 2, 3, 4, 5, 6, 8];
//var res = matriz3.splice(3, 2);
//alert(res);
//alert(matriz3);

//var matriz4 = [1, 2, 3, 4];
//matriz4.push(5);
//alert(matriz4);
//alert(matriz4.pop());
//alert(matriz4);

//var matriz5 = ["a", "b", "c", "d"];
//matriz5.unshift("x", "z");
//alert(matriz5);
//alert(matriz5.shift());
//alert(matriz5);

// ORDENACIÓN
//var matriz6 = [7, 3, 9, 11, 4];
//var matriz6 = ["(", "A", "AA", "AB", "N", "Ñ", "L"];
//alert(matriz6.reverse());
//alert(matriz6);
//alert(matriz6.sort().reverse());
//alert(matriz6)

//var frutas = ["Naranja", "Pera", "Melocotón", "Fruta de la pasión", "Uva"];

//function compararFruta(f1, f2) {
//    if (f1.length > f2.length)
//        return 1;
//    else if (f1.length < f2.length)
//        return -1;
//    else
//        return 0;
//}

//frutas.sort(compararFruta);
//alert(frutas);

// BÚSQUEDA
//var matriz7 = [8, 99, 1, 3, 2, 11, 24, 1, "cinco", 5, 72, 1, 31];
//alert(matriz7.indexOf(1, 4));

//function encontrarTodos(elto, matriz) {
//    var encontrados = [];
//    var pos = matriz.indexOf(elto);
//    while (pos != -1) {
//        encontrados.push(pos);
//        pos = matriz.indexOf(elto, ++pos);
//    }
//    return encontrados;
//}

//alert(encontrarTodos(1, matriz7));
//alert(encontrarTodos("cuatro", matriz7));

// PROCESADO DE MATRICES
var matriz8 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function esPar(n) {
    return (n % 2 ) == 0;
}
//var numerosPares = matriz8.filter(esPar);
//alert(numerosPares);
//alert(matriz8);

//alert(matriz8.some(esPar));
//alert(matriz8.every(esPar));

//function elDoble(n)
//{
//    return n * 2;
//}

//var res = matriz8.map(elDoble);
//alert(res);
//alert(matriz8);

//function mostrar(n, indice) {
//    alert("El elemento [" + indice + "] tiene el valor: " + n);
//}

//var matriz9 = [1, 3, 5];
//matriz9.forEach(mostrar);