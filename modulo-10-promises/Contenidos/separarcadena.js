var task1 = function() {
    var pr = navigator.geolocation.getCurrentPositionPromise();
    pr.then(function(c) {
       console.log('1st coord -> ', c); 
    });
    return pr;
}

var task2 = function() {
    var pr = setIntervalPromises(2000);
    pr.then(function() {
       console.log('2000 ms waited'); 
    });
    return pr;
}

var task3 = function() {
    var pr = navigator.geolocation.getCurrentPositionPromise();
    pr.then(function(c) {
        console.log('2nd coord -> ', c);
    });
    return pr;
}

task1().
    then(task2).
    then(task3).
    then(function() {
        console.log('all promises resolved');
    });
