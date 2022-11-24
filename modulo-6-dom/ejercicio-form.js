console.log('Cargado');
const form = document.getElementById('frm');


const onSubmit = (event) => {
    let package = {};
    const user = event.target.emailInput.value;
    const pass = event.target.passwordInput.value;
    const passConfirm = event.target.passwordInputRepeat.value;
    let errorMessages = document.createElement('ul');
    
    let errors = false;
    if(user.length == 0 || !user.includes('@')){
        errors = true;
        errorMessages.innerHTML += '<li>El email es incorrecto</li>'
    }

    event.stopPropagation();
    event.preventDefault();
}


form.addEventListener('submit', onSubmit)



console.log('Final');