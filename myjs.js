function test1() {
  document.getElementById("test").innerHTML = "Hello Javascript";
}
function test2() {
  document.getElementById("test2").innerHTML = "Hello World!";
}
function alert_test() {
  window.alert("Hello Friend");
}

/* --------- object constructor -------------- */
function person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

let toey = new person('Natthaphol','Uthumphirat')
function name1() {
  document.getElementById('name').innerHTML = toey.firstName + ' ' + toey.lastName;
}


/* ---------- Form Validation ----------------- */
function name3() {
  let fullName = document.forms['myForm']['getName'].value;

  if (fullName == null || fullName == ""){
    alert("Name is required to fill!");
    return false; 
  } if (fullName.length < 3){
    alert("Name must be filled more than 3 letters!");
    return false;
  } else {
    document.getElementById('printName') = fullName;
  }
}