const Triangle = class {}
const Square1 = class {}
const BaseFig = function(i) {
  if (i == 2) return Square1;
  else return Triangle;
}
const Painted = class extends BaseFig(2) {
  constructor() {
    super();
    console.log('I am square ->', this instanceof Square1);
    console.log('I am triangle ->' ,this instanceof Triangle);
  }
}
var p = new Painted();

/*
Se pueden usar expresiones en extend siempre que devuelva una clase, por ejemplo para decidir de que objeto se hereda basado en expresión.

Es util para crear mixins (es el equivalente a métodos de extensión?)
*/

/**
 * Ejemplo una clase que añade funcionalidades de notificacion de eventos de pulsacion
 */

const Button = (sc) => class extends sc {
    OnClick(cc) {
        console.log('clicked'); 
        cc();
    }
}
const Square = class {
    constructor(r) {
        this.size = r;
    }
    area() {
        return this.size * this.size;
    }
}

// Aqui la clase Square, hereda un metodo de extension que se llama OnClick, por eso ButtonSquare es un mixin
const ButtonSquare = class extends Button(Square) {}

let bsquare = new ButtonSquare(10);
console.log(bsquare.area());     // 100;
bsquare.OnClick(() => {});      // 'clicked'
