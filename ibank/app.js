const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');


username.addEventListener('keyup', function() {
    if (username.value.length < 8) {
        username.style.border = "1px solid red";
    }   else {
            username.style.border = "1px solid green";
        }     
});
password.addEventListener('keyup', function() {
    if (password.value.length < 8) {
        password.style.border = "1px solid red";
    }   else {
            password.style.border = "1px solid green";
        }     
});


function validate() {
    if (username.value.length == 0 || username.value.length < 8) {
        document.querySelector(".error").innerHTML = "Username should be up to 8 characters";
        return false;
    } else if (password.value.length == 0 || password.value.length < 8) {
        document.querySelector(".error").innerHTML = "Password should be up to 8 characters";
        return false;
    };
};


