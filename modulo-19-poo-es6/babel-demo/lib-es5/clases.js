"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Foo = function () {
    function Foo(x, y) {
        _classCallCheck(this, Foo);

        this.x = x;
        this.y = y;
    }

    _createClass(Foo, [{
        key: "DoStuff",
        value: function DoStuff() {
            console.log(this.x, this.y);
        }
    }]);

    return Foo;
}();

var f = new Foo(10, 20);

var something = function something() {};
//# sourceMappingURL=clases.js.map