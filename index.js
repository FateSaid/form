const myForm = document.getElementById('myForm');

myForm.noValidate = true;

myForm.addEventListener('submit' validateForm);

function validateForm(){
    const form = e.target;
    
    if(form.checkValidate(e)){

    }
    else{
        e.preventDefault();
    }
}