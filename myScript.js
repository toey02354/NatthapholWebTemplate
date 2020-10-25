var mybutton = document.getElementById("myBtn");

window.addEventListener('scroll', () => {
  let scrolls = window.scrollY;
  if (scrolls > 800) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
})

function topFunction() {
  document.documentElement.scrollTop = 0;
}