const form = document.getElementById('form')
const emailInput = document.getElementById('email');
const errorMsg = document.getElementById('error-msg');

form.addEventListener('submit', function (){
   let emailValue = emailInput.value;
    if (checkEmail(emailValue)){
        console.log('Should be true');
       errorMsg.style.display = 'none';
   }else {
        console.log("Should be false!");
       errorMsg.style.display = 'inline';
   }
});
function checkEmail(email){
    const regex = new RegExp(/^[\w.-]+@[\w.-]+\.\w+$/); // in case of an error, change the regex to /^[\w\.-]+@[\w\.-]+\.\w+$/
    return regex.test(email);
}