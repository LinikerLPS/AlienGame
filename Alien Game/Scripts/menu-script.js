const input = document.querySelector('.input-login');
const button = document.querySelector('.button-login');
const form = document.querySelector('.form-login');

const validateInput = ({ target }) => {
   if (target.value.length > 2){
    button.removeAttribute('disabled');
    return;
   }

   button.setAttribute('disabled', '');
}

const handleSubmit = (event) => {
    event.preventDefault();

    localStorage.setItem('player', input.value);
    window.location = '../Telas/game.html';
}

input.addEventListener('input', validateInput);
form.addEventListener('submit', handleSubmit);