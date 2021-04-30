let video = document.querySelector(".column1");
let fadeDivider = 900;
let piceo = document.querySelector('.picture1');
let fadeDivider2 = 1200;
window.addEventListener('scroll', () => {
    let scrollvalue = window.scrollY;
    opacityValue1 = 1 - scrollvalue / fadeDivider;
    opacityValue2 = scrollvalue / fadeDivider2;
    if (scrollvalue >= 100) {
        video.style.opacity = opacityValue1;
    }
    if (scrollvalue >= 900) {
        piceo.style.opacity = opacityValue2;
    }
    if (scrollvalue < 100) {
	video.style.opacity = 1;
    }
})