'use strict'

const categories = document.querySelector('.categories')
const projectsData = document.querySelectorAll('.project')
const projects = document.querySelector('.projects')

categories.addEventListener('click', (event) => {
    const filter = event.target.dataset.category
    if (filter === undefined) {
        return;
    }

    activeNumber(event)
    projectFilter(filter);



})

const activeNumber = (event) => {
    const current = document.querySelector('.category--selected')
    current.classList.remove('category--selected')
    event.target.classList.add('category--selected')
}

const projectFilter = (filter) => {
    projectsData.forEach((project) => {

        if (filter === 'all' || filter === project.dataset.type) {
            project.style.display = 'block'
        } else {
            project.style.display = 'none'
        }
    })
    projects.classList.add('animation-out')
    setTimeout(() => {
        projects.classList.remove('animation-out')
    }, 250)

}





