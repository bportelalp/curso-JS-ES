import {next} from './inc.js'
const txt = document.getElementById('txtOne');
const btn = document.getElementById('btnInc');
btn.addEventListener('click', () => {
    const value = parseInt(txt.value, 10);
    txt.value = next(value);
}, false);