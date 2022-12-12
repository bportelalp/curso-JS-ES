var obj = {
  _v: 10,
  set v(value) {
    if (value > 0) {
      this._v = value;
    }
  }
}

const hidePrivates = function(obj) {
  const handler = {
    get (target, key, receiver) {
      if (key.substr(0,1) === "_") {
        return undefined;
      }
      else return target[key];
    },
    
    set (target, key, receiver) {
      if (key.substr(0,1) !== "_") {
        target[key] = receiver;
      }
    }
  }
  
  return new Proxy(obj, handler);
}

let test = hidePrivates(obj);

console.log(test._v);
test.v = 1200;
test._v = 100;
console.log(test._v);
console.log(obj._v);

