navigator.geolocation.getCurrentPositionPromise = function() {
    var pr = new Promise(function(resolve, reject) {
       navigator.geolocation.getCurrentPosition(function(c) {
           resolve(c);  // Resolvemos la promise 
       },
       function(e) {
           console.log("Error getting position -> ", e)
           reject();
       });
    });
     return pr;   // Devolvemos la promise
}