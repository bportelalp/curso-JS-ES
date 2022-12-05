////// Constructores
function Marcianito(elNombre, elColor, posX, posY, disparosIniciales) {
    this.name = elNombre;
    this.color = elColor;

    if (posX < 0) posX = 0;
    if (posX > 100) posX = 100;
    this.x = posX;

    if (posY < 0) posY = 0;
    if (posY > 100) posY = 100;
    this.y = posY;

    if (disparosIniciales < 0) disparosIniciales = 0;
    if (disparosIniciales > 100) disparosIniciales = 100;
    this.disparos = disparosIniciales;

    this.disparar = function () {
        this.disparos--;
        //codigo para pintar el disparo
        alert(this.name + " ha disparado.");
    };
}

var marcianito1 = new Marcianito("Invasor #1", "Azul", 100, 20, 30);
//alert(marcianito1.constructor);
//alert(marcianito1);
var marcianito2 = new Marcianito("Invasor #2", "Verde", 140, 10, 50);
//alert(window.disparos);
//alert(marcianito1.name);
//marcianito2.disparar()
//alert(marcianito2.disparos);
//alert(typeof (marcianito1));

//alert(marcianito1.constructor == Marcianito);

//alert(marcianito1 instanceof Marcianito);

//alert(marcianito1 instanceof Date);

//marcianito1.disparar();
//alert(marcianito1.disparar == marcianito2.disparar);

String.prototype.isNumeric = function () {
    return !isNaN(parseFloat(this));
}

alert("1234".isNumeric());
alert("abcd".isNumeric());