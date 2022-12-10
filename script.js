const regex =/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; 
let submitButton = document.getElementById("submitButton");

function Validate(){

    let form = document.getElementById('form');
    let email = document.getElementById('email');
    let text = document.getElementById('text');

    if(email.value.match(regex) && email.value !== ""){
        form.classList.remove('invalid');
        form.classList.add('valid');
        isValid = true;
        text.innerHTML = "Your email adress is valid";
        text.style.color="#0CC143"
        submitButton.disabled = false
    }
    else{
        form.classList.remove('valid');
        form.classList.add('invalid');
        isValid = false;
        text.innerHTML = "Please, enter a valid email";
        text.style.color="#FF0000"
        submitButton.disabled = true;
    }
    if(email.value.length ===0){
        form.classList.remove('valid')
        form.classList.remove('invalid');
        isValid = false;
        text.innerHTML ="";
        submitButton.disabled = true;
    }
}

function SubmitForm(event){
    event.preventDefault();
    alert("Good job!");
}