<<<<<<< HEAD
const fullName = document.querySelector('#name');
const email = document.querySelector('#email');
const username = document.querySelector('#username');
const password = document.querySelector('#password');
const submitButton = document.querySelector('#Submit');


function saveUserdata(){
  let user = document.getElementById(data).value;
  let data = {
    name:fullName.value.trim(),
    email:email.value.trim(),
    username:username.value.trim(),
    password:password.value.trim()}
  };
  document.getElementById('Submit').addEventListener("click", function() {
  localStorage.setItem('name',
   JSON.stringify({user:fullName.value})
   )
});

   document.getElementById('Submit').addEventListener("click", function() {
    localStorage.setItem('email',
   JSON.stringify({email:email.value}),
   )
});

document.getElementById('Submit').addEventListener("click", function() {
    localStorage.setItem('username',
   JSON.stringify({username:username.value}),
   )
});

document.getElementById('Submit').addEventListener("click", function() {
    localStorage.setItem('password',
   JSON.stringify({password:password.value}),
   )
});
=======
let name = document.querySelector('#name');
let email = document.querySelector('#email');
let username = document.querySelector('#username');
let password = document.querySelector('#password');
let submitButton = document.querySelector('#Submit');

submitButton.addEventListener("click", function(event) {
    event.preventDefault();
    
    // create user object from submission
    var user = {
      firstName: firstNameInput.value.trim(),
      lastName: lastNameInput.value.trim(),
      email: emailInput.value.trim(),
      password: passwordInput.value.trim()
    };
  
    // set new submission to local storage 
    localStorage.setItem("user", JSON.stringify(user));
    
  });



>>>>>>> b37739c47904bbe0113d8fbfafaaa0376209598f
