let obj = {
    nick: 'eiximenis',
    getUrl: function () { return 'http://twitter.com/' + this.nick }
}

var objLambda = {
    nick: 'eiximenis',
    getUrl: () => 'http://twitter.com/' + this.nick
}

console.log('con funcion', obj.getUrl());
console.log('con lambda', objLambda.getUrl());