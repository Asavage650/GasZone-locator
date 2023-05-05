const username = document.querySelector('#username');
const password = document.querySelector('#password');
const submitButton = document.querySelector('#Submit');

function saveUserdata(){
    let user = document.getElementById(data).value;
    let data = {
      name:username.value.trim(),
      password:password.value.trim()}
    };
    document.getElementById('Submit').addEventListener("click", function() {
    localStorage.setItem('username',
     JSON.stringify({username:username.value})
     )
  });
  
     document.getElementById('Submit').addEventListener("click", function() {
      localStorage.setItem('password',
     JSON.stringify({password:password.value}),
     )
  });