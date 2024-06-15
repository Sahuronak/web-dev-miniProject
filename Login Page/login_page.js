var username = document.form['form']['username'];
var email = document.form['form']['email'];
var password = document.form['form']['password'];

var error = document.getElementById('error');

email.addEventListener('textInput',email_Verify);
password.addEventListener('textInput',password_Verify);

function validated(){
    if(username.value.length<9){
        username.style.border ="1px solid red"
        username_error.style.display = "block";
        username.focus();
        return false;
    }
    if(email.value.length<9){
        email.style.border ="1px solid red"
        email_error.style.display = "block";
        email.focus();
        return false;
    }
    if(password.value.length<9){
        password.style.border ="1px solid red"
        password_error.style.display = "block";
        password.focus();
        return false
    }
}
function  email_Verify(){
    if(email.value.length>=8){
        email.style.border ="1px solid red"
        email_error.style.display = "block";
        return true
    }
}
function  password_Verify(){
    if(password.value.length>=8){
        password.style.border ="1px solid red"
        password_error.style.display = "block";
        return true
    }
}
