var setIntervalPromises = function(interval) {
    var pr = new Promise(function(resolve, reject) {
        window.setInterval(function() { resolve(); }, 
            interval);
    });
    
     return pr;   // Devolvemos la promise
}

// uso: 
// var wait = setIntervalPromises(interval)
// wait.then(function() { ... });