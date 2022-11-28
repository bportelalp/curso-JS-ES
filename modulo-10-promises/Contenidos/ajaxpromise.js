var xhrget = function(url) {
    var pr = new Promise(function(resolve,reject) {
        var req = new XMLHttpRequest();
        req.open('GET', url, true);
        req.onreadystatechange = function(){
            if (req.readyState == XMLHttpRequest.DONE) {
                if (req.status == 200) {
                    resolve(req);
                }
                else {
                    reject(new Error("Code " + req.status + " received"));
                }
            }
        };
        req.send(null);
    });
    return pr;
}  