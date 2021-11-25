const menuBtn = document.querySelector('.header__nav__menu__btn');
const menuAside = document.querySelector('.header__nav__menu__aside');
const blur = document.createElement('div');
blur.classList.add('blur');
let lastScrollTop = 0;
const header = document.querySelector('header');

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

document.addEventListener('scroll', () => {
    let st = window.pageYOffset || document.documentElement.scrollTop;

    if (st == 0) {
        header.classList.remove('up')
        header.classList.remove('down')
    } else if (st > lastScrollTop) {
        header.classList.remove('up')
        header.classList.add('down')
    } else {
        header.classList.remove('down')
        header.classList.add('up')
    }

    lastScrollTop = st <= 0 ? 0 : st;
})