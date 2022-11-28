'use strict';
var n = 'eiximenis';

function foo() {
	n = 'campus mvp';
	var n = null;
	
	for (var i=0; i<10; i++) {
		n = 'iter ' + i;
	}
}

foo();
console.log(n);