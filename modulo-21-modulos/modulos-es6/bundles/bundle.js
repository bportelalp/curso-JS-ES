(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _math = require('./math');

var _math2 = _interopRequireDefault(_math);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log(_math2.default.inc(10));

},{"./math":2}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _sumar = require('./sumar');

var _sumar2 = _interopRequireDefault(_sumar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function inc(a) {
    return (0, _sumar2.default)(a, 1);
}

exports.default = { inc: inc };

},{"./sumar":3}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
/*
export default function sumar(a,b) {
    return a+b;
}
*/

var sumar = function sumar(a, b) {
    return a + b;
};
exports.default = sumar;

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJtYWluLmpzIiwibWF0aC5qcyIsInN1bWFyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQTs7Ozs7O0FBRUEsUUFBUSxHQUFSLENBQVksZUFBSyxHQUFMLENBQVMsRUFBVCxDQUFaOzs7Ozs7Ozs7QUNGQTs7Ozs7O0FBRUEsU0FBUyxHQUFULENBQWEsQ0FBYixFQUFnQjtBQUNaLFdBQU8scUJBQUUsQ0FBRixFQUFJLENBQUosQ0FBUDtBQUNIOztrQkFFYyxFQUFDLFFBQUQsRTs7Ozs7Ozs7Ozs7Ozs7QUNBZixJQUFNLFFBQVEsU0FBUixLQUFRLENBQUMsQ0FBRCxFQUFHLENBQUg7QUFBQSxXQUFTLElBQUksQ0FBYjtBQUFBLENBQWQ7a0JBQ2UsSyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJpbXBvcnQgbWF0aCBmcm9tICcuL21hdGgnO1xyXG5cclxuY29uc29sZS5sb2cobWF0aC5pbmMoMTApKTtcclxuXHJcbiIsImltcG9ydCBzIGZyb20gJy4vc3VtYXInO1xyXG5cclxuZnVuY3Rpb24gaW5jKGEpIHtcclxuICAgIHJldHVybiBzKGEsMSk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtpbmN9OyIsIi8qXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN1bWFyKGEsYikge1xyXG4gICAgcmV0dXJuIGErYjtcclxufVxyXG4qL1xyXG5cclxuY29uc3Qgc3VtYXIgPSAoYSxiKSA9PiBhICsgYjtcclxuZXhwb3J0IGRlZmF1bHQgc3VtYXI7XHJcblxyXG4iXX0=
