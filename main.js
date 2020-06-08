const form = document.getElementById('myform');
const name = document.getElementById('name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const rptPassword = document.getElementById('rptPassword');
const errorMessage = document.getElementById('error');

form.addEventListener('submit', (e) => {
    let messages = []

    if (name.value === '' || name.value == null || name.value.length <= 2) {
        messages.push('name cannot be blank');
    }

    if (email.value === '') {
        messages.push('email cannot be blank');
    } else if(!emailCheck(email.value)) {
        messages.push('email is not valid');
    }

    if (password.value.length <= 7) {
        messages.push('password must be greater than 7 characters');
    }

    if (password.value.length >= 18) {
        messages.push('password too long!!');
    }

    if (password.value != rptPassword.value) {
        messages.push('passwords do not match!!');
    }

    if (messages.length > 0) {
       e.preventDefault();
       errorMessage.innerText = messages.join(", ");
       document.getElementById("error").style.color = "red";
       document.getElementById("error").style.textAlign = "center";
    }
});

    function emailCheck(email) {
        return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
    }
