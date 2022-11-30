

let getUsers = () => {
    fetch('https://reqres.in/api/users',{mode: 'cors'})
    .then(r => {
        let json = r.json();
        console.log('Se ha obtenido el json: ',json);
        return json;
    })
    .then(users  => {
        console.log('Se recupera el primer usuario: ', users.data[0].first_name);
    });
}