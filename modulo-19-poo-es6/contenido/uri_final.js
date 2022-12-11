var {Uri, HttpUri} = 
(function() {
  
  let _privates = new WeakMap();
  
  class Uri {
    constructor({protocol, address}) {
      _privates.set(this, {});
      if (typeof(arguments[0]) === 'string') {
        this.rawUri = arguments[0];
        var idx = this.rawUri.indexOf("://");
        
        let pr = _privates.get(this);
        pr._address = this.rawUri.substring(idx + 3);
        pr._protocol = this.rawUri.substring(0, idx);
      }
      else {
         this.rawUri = protocol + '://' +  address;

        let pr = _privates.get(this);
        pr._address = this.rawUri.substring(idx + 3);
        pr._protocol = this.rawUri.substring(0, idx);
      }
    }

    navigate() {
      document.location.href = this.rawUri;
    }

    get protocol() {
      return _privates.get(this)._protocol;
    }

    get address() {
      return _privates.get(this)._address;
    }

    set address(value) {
      if (typeof(value) === "string" && value !== "") {
        let pr = _privates.get(this);
        pr._address = value;
        return pr._address;
      }
    }

  }

  class HttpUri extends Uri {
    constructor(address) {
      super({protocol: "http", address});
    }
  }
  
  return {Uri, HttpUri};
  
})();


