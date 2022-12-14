define(['./sumar.js'], function(sumar) {
    function inc(a) {
        return sumar(a,1);
    }

    return {inc: inc};

});
