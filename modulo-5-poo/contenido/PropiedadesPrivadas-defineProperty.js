////// Variables privadas
function Marcianito(elNombre, elColor, posX, posY, disparosIniciales) {
    var that = this;

	//Definición de la propiedad name, que encapsula el acceso a la variable de instancia _name
    var _name = elNombre;
	function getName(){
        return _name.toUpperCase() + " (" + that.color + ")";
    };
    function setName(nombre) {
        _name = nombre;
    };
	//Definimos una propiedad "name" que usa por debajo el getter y el setter facilitando su uso
	if (Object.defineProperty) {
      Object.defineProperty(this, "name",
      {
         get: getName,
         set: setName,
		 enumerable: true,
		 configurable: false	//La hacemos no configurable, para que no pueda cambiarse ni borrarse
      });
   }
	
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

var marcianito1 = new Marcianito("Invasor del espacio 1", "Azul", 100, 20, 30);
var marcianito2 = new Marcianito("Invasor del espacio 2", "Rojo", 400, 300, 30);
alert(marcianito1.name);
alert(marcianito2.name);
delete marcianito1.name;	//No funcionará ya que la propiedad no es configurable (si cambias el valor de configurable a true, se borrará la propiedad y la siguiente línea fallará)
alert(marcianito1.name);

//Hago inmutable el marcianito
Object.freeze(marcianito1);
//no se añadirá esta propiedad (en condiciones normales sí))
marcianito1.nono = "nono";
marcianito1.disparos = 10;	//No funcionará (está congelado)
delete marcianito1.disparos;	//No funcionará (está congelado)
marcianito1.disparar();	//Funcionará pero no permitirá reducir el valor de la propiedad disparos por lo que seguirá siendo 30. Si cambiamos freeze por seal sí que bajará el número de disparos (serían 9 entonces, porque antes le hemos asignado un 10)
alert(marcianito1.disparos);	//indicará 30