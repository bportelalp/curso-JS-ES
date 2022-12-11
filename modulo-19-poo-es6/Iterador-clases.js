/**
 * Cómo definir un iterador
 */

const Line = class {
    constructor(...points) {
        this.points = points;
    }

    *[Symbol.iterator]() {
        for (let p of this.points) {
            yield p;
        }
    }
}
var l = new Line(10, 20, 30);
for (let p of l) {
    console.log(p)
}

const Figure = class {
    constructor(...lines) {
        this.lines = lines
    }
        *[Symbol.iterator]() {
        for (let l of this.lines) {
            yield l;
        }
    }
    
    /**
     * Esto se define con bind, porque no podemos usar una arrow para definir el generador (por
     * eso se usa bind) y porque ES6 no permite getters para generadores
     */
    get points() {
      return (function *() {
        for (let l of this.lines) {
           yield* l 
        }
      }.bind(this))();
    }

    /**
     * Tambien podemos optar por no usar un getter, asi se simplifica la sintaxis
     */
    *pointsSinGet() {
        for (let l of this.lines) {
            yield* l 
        }    
    }
}