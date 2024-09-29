//1헤더의 높이 구하기 71.5px
//2스크롤이 71.5보다 넘어가면 header클래스 이름 바꾸기
//3바꾼 클래스 이름으로 css에서 색상 블랙으로 지정해주기
//스크롤길이를 변수로 지정
//조건문 작성
//자바스크립트에서 css클래스 명 변경하는법이 필요하다

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


