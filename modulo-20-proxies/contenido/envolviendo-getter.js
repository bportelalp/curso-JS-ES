var obj = {
  prop: 42
};

function foo(p) {
  console.log(p.prop)
  console.log(p.cualquierCosa);
}

let proxy = new Proxy(obj, {
  get(target, key, receiver) {
    if (key == "prop") {
      return target[key];
    }
    else return NaN;
  }
})


foo(proxy);