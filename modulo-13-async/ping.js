function ping(url) {
    const pr = new Promise((resolve, reject) => {
        const init = new Date();
        fetch(url)
            .then(response => {
                const end = new Date();
                const interval = end.getTime() - init.getTime();
                resolve(interval);
            })
    })
    return pr;
}

async function pingAsync(url){
    let interval = await ping(url);
    console.log('Solved on: ', interval, ' ms')
    return interval;
}


console.log('\nMandando ping');
ping('https://www.google.es')
    .then(result => console.log('Solved on: ', result, ' ms'))
    .catch(err => console.error('Ups!'));
console.log('Finalizado ping sincrono');

console.log('\nMandando ping asincronico');
pingAsync('https://www.google.es')
console.log('Finalizado programa');