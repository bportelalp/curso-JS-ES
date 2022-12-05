'use strict';
function foo() {
    var sum = 0;
    for (let i=0; i< 10; i++) {
        sum += i;
    }   
    console.log('iters ->' + i + ' result ' + sum);
}
foo();  