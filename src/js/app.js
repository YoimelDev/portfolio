const menuBtn = document.querySelector('.header__nav__menu__btn');
const menuAside = document.querySelector('.header__nav__menu__aside');
const blur = document.createElement('div');
blur.classList.add('blur');

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('opened');
    menuAside.classList.toggle('opened');

    blurBg();
})

document.addEventListener('click', e => {
    let click = e.target;

    if (click === blur) {
        menuBtn.classList.remove('opened');
        menuAside.classList.remove('opened');

        blurBg();
    }
})

function blurBg() {
    if (!document.body.contains(blur)) {
        document.body.appendChild(blur);
    } else {
        document.body.removeChild(blur);
    }
}