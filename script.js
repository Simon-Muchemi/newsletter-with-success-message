const form = document.getElementById('form')
const emailInput = document.getElementById('email');
const errorMsg = document.getElementById('error-msg');

form.addEventListener('submit', function (event){
   let emailValue = emailInput.value;
    if (checkEmail(emailValue)){
        console.log('Should be true');
        errorMsg.style.display = 'none';
        window.location.href = 'success-message.html';
   }else {
        emailInput.style.color = "red";
        emailInput.style.backgroundColor = "rgba(227, 122, 122, 0.61)";
        console.log("Should be false!");
        errorMsg.style.display = 'inline';
        event.preventDefault();
   }
});

function checkEmail(email){
    const regex = new RegExp(/^[\w.-]+@[\w.-]+\.\w+$/); // in case of an error, change the regex to /^[\w\.-]+@[\w\.-]+\.\w+$/
    return regex.test(email);
}