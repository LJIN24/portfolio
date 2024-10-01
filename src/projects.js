'use strict';

//스크롤이 각 섹션에 진입할때 item_active클래스를 새롭게 추가하고 원래 섹션에서 제거한다.
//각 섹션을 클릭하면 해당 위치로 스크롤 한다. 이벤트가 발생할 때 

const observer0 = new IntersectionObserver((entries, observer) => {
    const home = document.querySelector('.home')
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            home.classList.add('active');
        } else {
            home.classList.remove('active');

        }
    })
}, { threshold: 0.8 });
const homeSection = document.querySelector('#home')
const homeHeader = document.querySelector('.home')
observer0.observe(homeSection)

homeHeader.addEventListener('click', () => {
    homeSection.scrollIntoView({ behavior: "smooth" });
})


const observer = new IntersectionObserver((entries, observer) => {
    const about = document.querySelector('.about')
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            about.classList.add('active');
        } else {
            about.classList.remove('active');

        }
    })
}, { threshold: 0.6 });
const about = document.querySelector('#about')
observer.observe(about)

const observer1 = new IntersectionObserver((entries, observer) => {
    const skills = document.querySelector('.skills')
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            skills.classList.add('active');
        } else {
            skills.classList.remove('active');

        }
    })
}, { threshold: 0.6 });
const skills = document.querySelector('#skills')
observer1.observe(skills)


const observer2 = new IntersectionObserver((entries, observer) => {
    const mywork = document.querySelector('.mywork')
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            mywork.classList.add('active');
        } else {
            mywork.classList.remove('active');

        }
    })
}, { threshold: 0.7 });
const mywork = document.querySelector('#mywork')
observer2.observe(mywork)


const observer3 = new IntersectionObserver((entries, observer) => {
    const testimonial = document.querySelector('.testimonial-1')
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            testimonial.classList.add('active');
        } else {
            testimonial.classList.remove('active');

        }
    })
}, { threshold: 0.8 });
const testimonial = document.querySelector('#testimonial')
observer3.observe(testimonial)

const observer4 = new IntersectionObserver((entries, observer) => {
    const contact = document.querySelector('.contact')
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            contact.classList.add('active');
        } else {
            contact.classList.remove('active');

        }
    })
}, { threshold: 0.8 });
const contact = document.querySelector('#contact')
observer4.observe(contact)

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



