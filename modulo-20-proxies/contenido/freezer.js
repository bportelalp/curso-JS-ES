let _privates = new WeakMap();
const _freeze = Symbol("freeze");

const createConfig = function(pr) {
  return {
    set (target, key, receiver) {
      var prop = target[key];
      if (this.pr.frozen) {
        return prop;
      }
      else {
        target[key] = receiver;
        return receiver;
      }
    },
    get (target, key, receiver) {
      if (key === _freeze) {
        return function(v) {
          this.pr.frozen = v ? true : false;
          return this.pr.frozen;
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
  
  static get freeze() {
    return _freeze;
  }
}

var obj = {v:42};
var freezer = new Freezer(obj);
var proxy = freezer.value;

console.log('all created');


/*
Exception: ReferenceError: can't access lexical declaration `config' before initialization
Freezer@Scratchpad/1:37:5
@Scratchpad/1:62:15
*/