'use strict';

const observer0 = new IntersectionObserver((entries, observer) => {
    const home = document.querySelector('.home')
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            home.classList.add('active');
        } else {
            home.classList.remove('active');

        };
    });
}, { threshold: 0.8 });

const homeSection = document.querySelector('#home');
observer0.observe(homeSection);


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





