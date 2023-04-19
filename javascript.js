function validate() {
    const password = document.getElementById('password');
    const confirm_pw = document.getElementById('confirm_pw');
    const message = document.getElementById('error-message');
    const submit = document.getElementById('submit');

    if (password.value == confirm_pw.value || confirm_pw.value == '') {
        message.className = '';
        confirm_pw.className = "";
        submit.disabled = false;
        submit.style.color = 'rgb(255, 255, 255)'
    } else if (password.value != confirm_pw.value) {
        message.className = 'error-message';
        confirm_pw.className = "error";
        submit.disabled = true;
        submit.style.color = "grey";
    }
}

function validateEmail() {
    const email = document.getElementById('email');
    const email_error = document.getElementById('email-error');

    if (email.value.includes('@') == true || email.value == '') {
        email.className = '';
        email_error.className = ''
    } else if (email.value.includes('@') == false) {
        email.className = 'error';
        email_error.className = 'email-error'
    }
}

    
