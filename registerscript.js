let openLoginRight = document.querySelector('.h1');
let loginWrapper = document.querySelector(".login-wrapper");

openLoginRight.addEventListener('click', function () {
    loginWrapper.classList.toggle('open');
});

function fullName() {
    let fName = document.forms['myForm']['getName'].value;
    let email = document.forms['myForm']['getEmail'].value;
    // ใช้ได้ทั้งสองแบบ
    // let password1 = document.forms['myForm']['getPassword'].value;
    // let password2 = document.forms['myForm']['getConfirmPassword'].value;
    let password1 = document.getElementById('getPassword').value;
    let password2 = document.getElementById('getConfirmPassword').value;

    if (fName.length < 4) {
        alert("Full Name must be more than 3 letters!");
        return false;
    }
    if (email.length < 4) {
        alert("Email must be more than 3 letters!");
        return false;
    }
    if (password1.length < 9) {
        alert("Password must be more than 8 letters!");
        return false;
    }
    if (password1 != password2) {
        alert("Password doesn't match");
        return false;
    }
}