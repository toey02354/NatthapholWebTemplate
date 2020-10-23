let openLoginRight = document.querySelector('.h1');
let loginWrapper = document.querySelector(".login-wrapper");

openLoginRight.addEventListener('click', function() {
    loginWrapper.classList.toggle('open');
});

function fullName() {
    let fName = document.forms['myForm']['getName'].value;
    let email = document.forms['myForm']['getEmail'].value;
    let password = document.forms['myForm']['getPassword'].value;

    if (fName.length < 3){
        alert("Full Name must be more than 3 letters!");
        return false;
    } if (email.length < 3) {
        alert("Email must be more than 3 letters!");
        return false;
    } if (password.length < 3) {
        alert("Password must be more than 3 letters!");
        return false;
    } else {
        alert("Thank You!");
    }
}