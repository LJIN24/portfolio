'use strict';

const header = document.querySelector('.header')
const headerHeight = header.getBoundingClientRect().height
document.addEventListener('scroll', () => {
    if (window.scrollY > headerHeight) {
        header.classList.add('header__dark')
    } else {
        header.classList.remove('header__dark')
    }

});
const home = document.querySelector('.home__opaicty');
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener('scroll', () => {

    home.style.opacity = 1 - scrollY / homeHeight
});

const arrow = document.querySelector('.arrow')
document.addEventListener('scroll', () => {
    if (window.scrollY < homeHeight / 2) {
        arrow.style.opacity = 0
    } else {
        arrow.style.opacity = 1
    }
});
const hamberger = document.querySelector('.hamberger')
const menu = document.querySelector('.header_menu')
hamberger.addEventListener('click', () => {
    menu.classList.toggle('active')
})
const menuItem = document.querySelector('.header_menu')
menuItem.addEventListener('click', () => {
    menu.classList.remove('active')
})


