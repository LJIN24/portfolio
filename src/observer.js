'use strict'

const sectionIds = [
    '#home',
    '#about',
    '#skills',
    '#mywork',
    '#testimonial',
    '#contact']

const sections = sectionIds.map((id) => document.querySelector(id));
const headerMenu = sectionIds.map((id) => document.querySelector(`[href='${id}']`));
const options = {
    rootMargin: '-20% 0px 0px 0px',
    threshold: [0, 0.97]
};

let activeHeaderMenu = headerMenu[0]
const visibleSections = sectionIds.map(() => false)

const observer = new IntersectionObserver((entries) => {
    let selectLastone;
    entries.forEach((entry) => {
        const index = sectionIds.indexOf(`#${entry.target.id}`)
        visibleSections[index] = entry.isIntersecting;
        selectLastone = index ===
            sectionIds.length - 1
            && entry.isIntersecting
            && entry.intersectionRatio >= 0.95

        const headerIndex = selectLastone ?
            sectionIds.length - 1 : firtsTrue(visibleSections)

        const newActiveHeader = headerMenu[headerIndex]

        activeHeaderMenu.classList.remove('active')
        activeHeaderMenu = newActiveHeader
        activeHeaderMenu.classList.add('active')




    });
}, options);
const firtsTrue = (visibleSections) => {
    const index = visibleSections.indexOf(true)
    return index >= 0 ? index : 0;
}
sections.forEach((section) => observer.observe(section));