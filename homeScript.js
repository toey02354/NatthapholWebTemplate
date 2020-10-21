let video = document.querySelector(".video");
let fadeDivider = 1000;
window.addEventListener('scroll', () => {
    let scrollvalue = window.scrollY;
    opacityValue = 1 - scrollvalue/fadeDivider;
    video.style.opacity = opacityValue;
})