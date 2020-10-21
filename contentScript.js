let forum2 = document.querySelector(".forum2");
let forum3 = document.querySelector(".forum3");
window.addEventListener('scroll', ()=>{
  let scrollValue = window.scrollY;
  console.log(scrollValue);
  if (scrollValue >= 750) {
    forum2.style.opacity = 1;
  }
  if (scrollValue >= 1800) {
    forum3.style.opacity = 1;
  }
})