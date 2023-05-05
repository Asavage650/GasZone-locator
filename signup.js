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
