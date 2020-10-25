var mybutton = document.getElementById("myBtn");
window.onscroll = function () {
  scrollFunction()
};

function scrollFunction() {
  if (document.documentElement.scrollTop > 800) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.documentElement.scrollTop = 0;
}