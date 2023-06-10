const emailInput = document.getElementById('email');
const errorMsg = document.getElementById('error-msg');

validateEmail = function (event)
{
    event.preventDefault();
    let email = emailInput.value;

    if (checkEmail(email)){
        window.location.href = 'success-message.html';
    }
    else {
        emailInput.style.color = "red";
        emailInput.style.backgroundColor = "rgba(227, 122, 122, 0.61)";
        errorMsg.style.display = 'inline';
    }

}
function checkEmail(email){
    // in case of an error, change the regex to /^[\w\.-]+@[\w\.-]+\.\w+$/
    const regex = new RegExp(/^[\w.-]+@[\w.-]+\.\w+$/);
    return regex.test(email);
}