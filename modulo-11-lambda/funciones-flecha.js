let stuff = {
    mult: 2,
    data: [1,2,3,4],
    log: function(){
        console.log('mult -->', this.mult, ' data --> ', this.data);
    },
    multData: function() {
        return this.data.map(function(e) {
            // aqui this vale el contexto global
            return e * this.mult;
        })
    },
    multDataThat: function() {
        let that = this;
        return this.data.map(function(e) {
            return e * that.mult;
        })
    },
    multDataBind: function() {
        return this.data.map(function(e) {
            // aqui this vale el contexto del objeto porque se usa bind
            return e * this.mult;
        }.bind(this))
    },
    multDataArrow: function() {
        return this.data.map(e => e * this.mult);
    }
}


console.log('Mult data                ', stuff.multData());
console.log('Mult data that           ',stuff.multDataThat());
console.log('Mult data con bind       ',stuff.multDataBind());
console.log('Mult data con lambda     ',stuff.multDataArrow());