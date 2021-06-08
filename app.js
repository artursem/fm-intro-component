const inputFirstName = document.querySelector('#first-name');
const inputLastName = document.querySelector('#last-name');
const inputEmail = document.querySelector('#email');
const inputPassword = document.querySelector('#password');
const errorMessage = document.querySelectorAll('.error');
const btn = document.querySelector('button');

const validateInput = (inputName, number) => {
    if (inputName.value !== '') {
        errorMessage[number].classList.add('display-none');
        inputName.classList.remove('input-error');
    } else {
        errorMessage[number].classList.remove('display-none');
        inputName.classList.add('input-error');
    }
}

const validateEmail = (number) => {
    const regex = new RegExp(/\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/gi);
    const test = regex.test(inputEmail.value);

    if (test) {
        errorMessage[number].classList.add('display-none');
        inputEmail.classList.remove('input-error');
    } else {
        errorMessage[number].classList.remove('display-none');
        inputEmail.classList.add('input-error');
    }
    
}

btn.addEventListener('click', e => {
    e.preventDefault();

    validateInput(inputFirstName, 0);
    validateInput(inputLastName, 1);
    validateEmail(2);
    validateInput(inputPassword, 3);
});