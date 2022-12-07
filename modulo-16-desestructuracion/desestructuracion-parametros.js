/*
Permite que se reciban objetos como parametros y se desestructuren en
el parametro, permitiendo tambien mejorar la lectura de la signatura del método
*/

let Send = (params) => {
    console.log('URL:', params.url);
    console.log('Method:', params.method);
    console.log('ContentType:', params.contentType);
}

/*Viendo la firma, ya sé que parametros le tengo que pasar, más legible */
let Send2 = ({url: url, method: method='GET', contentType: contentType}) =>{
    console.log('URL:', url);
    console.log('Method:', method);
    console.log('ContentType:', contentType);

}

Send2({url: 'campusmvp.es', contentType: 'application/json'})