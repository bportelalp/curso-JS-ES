"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Foo = function Foo(x, y) {
    _classCallCheck(this, Foo);

    this.x = x;
    this.y = y;
};

var f = new Foo(10, 20);

console.log(f.x, f.y);