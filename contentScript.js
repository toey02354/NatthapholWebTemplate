let messages = document.querySelector(".forum .message");
let images = document.querySelector(".forum .imgBG");
images.addEventListener("mouseover",mouseOver);
images.addEventListener("mouseout",mouseOut);
function mouseOver(){
  messages.style.opacity = 0;
}
function mouseOut(){
  messages.style.opacity = 1;
}