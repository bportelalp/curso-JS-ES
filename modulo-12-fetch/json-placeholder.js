/**Ejecutar con node.
 * En v18 node incluye fetch, pero aqui el parseo a json es una nueva promesa
 */

var options = {
    method: 'GET',
}
let promise = fetch('https://jsonplaceholder.typicode.com/users', options)
.then(response => {
    return response.json();
})
.then(result => console.log(result))