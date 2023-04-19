function validate() {
    const password = document.getElementById('password');
    const confirm_pw = document.getElementById('confirm_pw');
    const message = document.getElementById('error-message');
    const submit = document.getElementById('submit');

    if (password.value == confirm_pw.value || 
                confirm_pw.value == '') {
        message.className = '';
        submit.disabled = false;
        submit.style.color = 'rgb(255, 255, 255)'
        confirm_pw.className = "";
    } else if (password.value != confirm_pw.value) {
        message.className = 'error-message'
        submit.disabled = true;
        submit.style.color = "grey";
        confirm_pw.className = "error";
    }
}

    
