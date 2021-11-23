const menuBtn = document.querySelector('.header__nav__menu__btn');

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('opened');
})