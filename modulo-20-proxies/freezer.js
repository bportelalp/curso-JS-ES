let _privates = new WeakMap();
// Esto es para congelar desde el propio proxy
const _freeze = Symbol("freeze");

const createConfig = function (pr) {
  return {
    /*
    * Esto permite que, si está congelado, no se aplican cambios
    */
    set(target, key, receiver) {
      var prop = target[key];
      if (pr.frozen) {
        return prop;
      }
      else {
        target[key] = receiver;
        return receiver;
      }
    },
    get(target, key, receiver) {
      if (key === _freeze) {
        return function (v) {
          this.pr.frozen = v ? true : false;
          return pr.frozen;
        }.bind(this);
      }
      else {
        return target[key];
      }
    },
    pr
  }
}

class Freezer {
  constructor(obj) {
    let pr = {};
    pr.frozen = false;
    _privates.set(this, pr);
    let config = createConfig(pr);
    pr.proxy = new Proxy(obj, config);

  }

  frozen(value) {
    let pr = _privates.get(this);
    if (value) {
      pr.frozen = true;
    }
    else {
      pr.frozen = false;
    }
  }

  get value() {
    let pr = _privates.get(this);
    return pr.proxy;
  }

  // Cambiar el estado de congelacion desde el propio proxy
  static get freeze() {
    return _freeze;
  }
}

var obj = { v: 42 };
var freezer = new Freezer(obj);
var proxy = freezer.value;

console.log('all created');

console.log('\nProxy:', proxy);

console.log('\nCambiando v a 100');
proxy.v = 100;
console.log('Proxy:', proxy);

console.log('\nCongelando objeto...');
freezer.frozen(true);
console.log('\Cambiando v a 200');
proxy.v = 200;
console.log('Proxy:', proxy);

console.log('\n Gracias al simbolo, podemos hacer lo siguiente para congelar');
proxy[Freezer.freeze](true); 
// Asi se congela sin necesitar una referencia al objeto Freezer, es un poco raro pero asi podria tenerlo sin la propia referencia a Freezer
console.log('Proxy:', proxy);
/*
Exception: ReferenceError: can't access lexical declaration `config' before initialization
Freezer@Scratchpad/1:37:5
@Scratchpad/1:62:15
*/