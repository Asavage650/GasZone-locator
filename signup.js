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



