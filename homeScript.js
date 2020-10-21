let video = document.querySelector(".column1");
let fadeDivider = 900;
window.addEventListener('scroll', () => {
    let scrollvalue = window.scrollY;
    opacityValue = 1 - scrollvalue/fadeDivider;
    video.style.opacity = opacityValue;
})

let fadeDivider2 = 600;
let pictures = document.querySelector(".picture1");
window.addEventListener('scroll', () => {
    let scrollValue2 = window.scrollY;
    console.log(scrollValue2);
    opacityValue2 = scrollValue2/fadeDivider;
    pictures.style.opacity = opacityValue2;
})