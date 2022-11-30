/*Ejemplos de api fetch */
Headers.prototype.isJson = function(){
    return this.has('content-type') && this.get('content-type').includes('application/json');
}

let getUsers = (page) => {
    let url = 'https://reqres.in/api/users';
    if(typeof page == 'number')
        url = url + '/' + 23;
    fetch(url, { mode: 'cors' })
        .then(r => {
            if (r.ok) {
                let json = r.json();
                console.log('Se ha obtenido el json: ', json);
                return json;
            }
            else {
                console.log('No fue correcta la solicitud');
                return Promise.reject('Error code: ' + r.status);
            }
        })
        .then(users => {
            console.log('Se recupera el primer usuario: ', users.data[0].first_name);
        })
        .catch(err => console.error(err));
}

let getHeaders = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(r => {
        // console.log('Todas las cabeceras: ', [...r.headers.keys()]); //todas las cabeceras
        console.log('Cabecera content-type', r.headers.get('content-type'));
        console.log('Es de tipo json?', r.headers.isJson());
    })
}
