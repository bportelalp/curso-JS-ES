////// Herencia
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

    if (!Marcianito.prototype.disparar) {
        Marcianito.prototype.disparar = function () {
            this.disparos--;
            //codigo para pintar el disparo
            alert(this.name + " ha disparado.");
        };
    }

    Marcianito.prototype.toString = function () {
            return this.name + " - " + this.color;
    };
}

//var marcianito1 = new Marcianito("Invasor del espacio 1", "Azul", 100, 20, 30);
//alert(marcianito1);

function NaveEstelar(elNombre, elColor, posX, posY) {
    Marcianito.call(this, elNombre, elColor, posX, posY, 30);
    this.tipo = "Nave estelar";
}
NaveEstelar.prototype = new Marcianito();
NaveEstelar.prototype.constructor = NaveEstelar;

function NaveNodriza(elNombre, elColor, posX, posY) {
    Marcianito.call(this, elNombre, elColor, posX, posY, 50);
    this.tipo = "Nave Nodriza";
}
NaveNodriza.prototype = new Marcianito();
NaveNodriza.prototype.constructor = NaveNodriza;

var marcianito1 = new NaveEstelar("Invasor del espacio 1", "Azul", 100, 20);
var marcianito2 = new NaveNodriza("Invasor del espacio 2", "Verde", 400, 10);

alert(marcianito1);
//alert(marcianito1.tipo);

//alert(marcianito2);
//alert(marcianito2.tipo);