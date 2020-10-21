var mybutton = document.getElementById("myBtn");
let contactBtn = document.getElementById("myContact")
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
function topFunction() {
  document.documentElement.scrollTop = 0;
}

let video = document.querySelector('video');
window.addEventListener('scroll',function () {
    let value1 = window.scrollY;
    video.style.opacity = 1 - value1/-600;
})