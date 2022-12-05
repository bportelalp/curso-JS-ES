/*Ejecutar con Node.JS v18 o superior, que tiene fetch */


/**
 * Obtener el tamaño de la respuesta de una url
 * @param {*} url la url a consultar
 * @returns entero con el tamapño
 */
function uriSize(url) {
    return new Promise((resolve, reject) => {
        fetch(url)
            .then(async response => {
                const text = await response.text()
                resolve(text.length);
            })
            .catch(err => reject(err));
    });
}

/**
 * Devuelve el tamaño de la respuesta mas larga, basado en promesas
 * @param {*} urls las url
 * @returns 
 */
function getLargestUri(urls = []) {
    return new Promise((resolve, reject) => {

        const promises = [];
        urls.forEach(url => {
            promises.push(uriSize(url));
        })

        Promise.all(promises).then(results => {
            let ordered = results.sort((a, b) => b - b)
            let result = ordered[0];
            resolve(result);
        });
    })
}

/**
 * Devuelve el tamaño de la respuesta mas larga, como funcion async
 * @param {*} urls 
 * @returns 
 */
async function getLargestUriAsync(urls = []) {
    const promises = [];
    urls.forEach(url => {
        promises.push(uriSize(url));
    })
    let result = 0;
    await Promise.all(promises).then(results => {
        let ordered = results.sort((a, b) => b - a)
        result = ordered[0];
    });
    return result;
}

async function main1() {
    console.info('Iniciando');
    uriSize('https://jsonplaceholder.typicode.com/posts/42')
        .then(s => console.log('Num carácteres recibidos: ' + s))
    console.info('Main terminado')
}

async function main2() {
    console.info('Iniciando');
    getLargestUri(['https://jsonplaceholder.typicode.com/posts/42',
        'https://jsonplaceholder.typicode.com/posts/41'])
        .then(s => console.log('Num carácteres recibidos: ' + s))
    console.info('Main terminado')
}
async function main3() {
    console.info('Iniciando');
    const result = await getLargestUriAsync(['https://jsonplaceholder.typicode.com/posts/42',
        'https://jsonplaceholder.typicode.com/posts/41']);
    console.log('Num carácteres recibidos: ' + result)
    console.info('Main terminado')
}

main3();