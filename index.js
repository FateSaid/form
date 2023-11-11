const password = document.querySelector('.form-password-one');
const form = document.querySelector('form');
const confirmPassword = document.querySelector('.form-password-two');
const tell = document.querySelector('#phone');
const btn = document.querySelector('button');

export{}; 

password.addEventListener('input', ()=>{
    if(password.textContent === confirmPassword.textContent){
        password.className = 'valid';
        confirmPassword.className = 'valid';
    }
})