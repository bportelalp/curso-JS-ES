/*Ejecutar con Node.JS v18 o superior, que tiene fetch */


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

function getLargestUri(urls = []) {
    return new Promise((resolve, reject) => {

        const promises = [];
        urls.forEach(url => {
            promises.push(uriSize(url));
        })

        Promise.all(promises).then(results => {
            let ordered = results.sort((a, b) => a - b)
            let result = ordered[0];
            resolve(result);
        });
    })
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

main2();