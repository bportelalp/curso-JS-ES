////// Instanciación tradicional 1 - Redefinir objetos genéricos
//var marcianito1 = new Object();
//marcianito1.name = "invasor del espacio #1";
//marcianito1.color = "Azul";
//marcianito1.x = 100;
//marcianito1.y = 20;
//marcianito1.disparos = 30;
//marcianito1.disparar = function () {
//    this.disparos--;
//    alert(this.name + " ha disparado.");
//};

//alert(marcianito1.name);
//alert(marcianito1.disparos);
//marcianito1.disparar();
//alert(marcianito1.disparos);

////// Instanciación de objetos tradicional 2 - JSON
//var marcianito1 = {
//    name : "invasor del espacio #1",
//    color : "Azul",
//    x : 100,
//    y : 20,
//    disparos : 30,
//    disparar : function () {
//        this.disparos--;
//        alert(this.name + " ha disparado.");
//    }
//};

//alert(typeof(marcianito1));

//alert(marcianito1.name);
//alert(marcianito1.disparos);
//marcianito1.disparar();
//alert(marcianito1.disparos);

//////  Instanciación de objetos tradicional 3 - Factorías
function crearMarcianito(elNombre, elColor, posX, posY, disparosIniciales) {
   return {
           name : elNombre,
           color : elColor,
           x : posX,
           y : posY,
           disparos : disparosIniciales,
           disparar : function () {
               this.disparos--;
               alert(this.name + " ha disparado.");
           }
   };
}

var marcianito1 = crearMarcianito("Invasor #1", "Azul", 0, 0, 30);
var marcianito2 = crearMarcianito("Invasor #2", "Verde", 100, 300, 50);
alert(marcianito1.name);
alert(marcianito2.disparos);