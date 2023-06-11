const emailInput = document.getElementById('email');
const errorMsg = document.getElementById('error-msg');
const input = document.querySelector('input');

validateEmail = function (event)
{
    event.preventDefault();
    let email = emailInput.value;
    console.log(typeof(email));
    localStorage.setItem('email-address', email);

    if (checkEmail(email)){
        window.location.href = 'success-message.html';
    }
    else {
        emailInput.style.color = "red";
        emailInput.style.backgroundColor = "rgba(227, 122, 122, 0.61)";
        errorMsg.style.display = 'inline';
        input.style.borderColor = 'red';
    }
}
function checkEmail(email){
    // in case of an error, change the regex to /^[\w\.-]+@[\w\.-]+\.\w+$/
    const regex = new RegExp(/^[\w.-]+@[\w.-]+\.\w+$/);
    return regex.test(email);
}