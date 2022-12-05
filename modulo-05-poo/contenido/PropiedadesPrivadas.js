////// Variables privadas
function Marcianito(elNombre, elColor, posX, posY, disparosIniciales) {
    var that = this;
    var _name = elNombre;
    this.getName = function(){
        return _name.toUpperCase() + " (" + that.color + ")";
    };
    this.setName = function (nombre) {
        _name = nombre;
    };

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
            alert(this.getName() + " ha disparado.");
        };
    }

    Marcianito.prototype.toString = function () {
        return this.getName() + " - " + this.color;
    };
}

var marcianito1 = new Marcianito("Invasor del espacio 1", "Azul", 100, 20, 30);
var marcianito2 = new Marcianito("Invasor del espacio 2", "Rojo", 400, 300, 30);
//alert(marcianito1.getName());
//marcianito1.setName("Comecocos");
//alert(marcianito1.getName());
//alert(marcianito1);
//var fNombre = marcianito1.getName;
//alert(fNombre());
//alert(marcianito1.getName());
//alert(marcianito2.getName()); 
//marcianito1.disparar();
//marcianito2.disparar();
//marcianito2.disparar();
//alert(marcianito1.disparos);
//alert(marcianito2.disparos);