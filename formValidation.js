const form= document.getElementById('form')
const username = document.getElementById('username')
const email= document.getElementById('email')
const password= document.getElementById('password')
const password2= document.getElementById('password2')

form.addEventListener('submit', (e)=>{
e.preventDefault()

checkInputs()
});

function checkInputs()  {
    const usernameValue = username.value.trim()
    const emailValue = email.value.trim()
    const passwordValue = password.value.trim()
    const password2Value = password2.value.trim()

    if(usernameValue === '') {
        //  add error class and 
        // show error and definitely you have to add class in
        //  javascript to pick the class you want in html
    
        setErrorFor(username, 'username cannot be blank')
        // add error message

    }else {
        setSuccessFor(username)
    }

    if(emailValue ==='') {
        setErrorFor(email, 'email cannot be empty')
    }else {
        setSuccessFor(email)
    }

    if(passwordValue ==='') {
        setErrorFor(password, 'password cannot be blank')
    }else {
        setSuccessFor(password)
    }

    if(password2Value ==='') {
        setErrorFor(password2, 'password2 cannot be blank');
    }else if(passwordValue!= password2Value){
setErrorFor(password, 'password do not match')
    }
    else{
        setSuccessFor(password2)
    }

}

    function setErrorFor(input, message) {
        const formControl = input.parentElement;
        const small = formControl.querySelector('small');
        small.innerText = message;
    
       formControl.className = 'form-control error';
    }
    function setSuccessFor(input) {
        const formControl = input.parentElement;
        formControl.className = 'form-control success';
    }



 




