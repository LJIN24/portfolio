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


const projectCategories = document.querySelector('.categories')
const project = document.querySelectorAll('.project')
const projectsContainer = document.querySelector('.projects')



projectCategories.addEventListener('click', (event) => {
    const filter = event.target.dataset.category
    if (filter === undefined) {
        return;
    };

    currentActive(event)
    filterProject(filter)
});

const currentActive = (event) => {
    const currentActive = document.querySelector('.category--selected')
    currentActive.classList.remove('category--selected')
    event.target.classList.add('category--selected')
}
const filterProject = (filter) => {
    project.forEach((project) => {
        if (filter === 'all' || filter === project.dataset.type) {
            project.style.display = 'block'
        } else {
            project.style.display = 'none'
        }
    });
    projectsContainer.classList.add('animation-out')
    setTimeout(() => {
        projectsContainer.classList.remove('animation-out')
    }, 250)
};
