document.getElementById('btn-submit').addEventListener('click', function(){

const emailField = document.getElementById('email-field')

const email = emailField.value;


const passwordField = document.getElementById('password-field')


const password = passwordField.value;

if (email === "personalbank@email.com" && password === "secret"){

window.location.href = 'homepage.html';
}

else{
  alert('invalid user')
}

})