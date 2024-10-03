'use strict'

//모든 섹션을 가져온다.
//intersection observer를 통해 모든 섹션을 관찰해야 한다.
//섹션이 감지될 때 필요한 header menu에 클래스를 추가해준다.
//어떤 header를 선택할지 선택기준을 결국 정해줘야 한다.
//화면에 여러섹션이 나오면 가장 먼저 있는 것 선택.
//마지막에 contact가 나오면 무조건 contact 선택.

const sectionIds = [
    '#home',
    '#about',
    '#skills',
    '#mywork',
    '#testimonial',
    '#contact'];

const section = sectionIds.map((id) => document.querySelector(id));
const headerMenu = sectionIds.map((id) => document.querySelector(`[href='${id}']`));

const visibleSections = sectionIds.map(() => false);

let activeHeader = headerMenu[0];

const options = {
    rootMargin: '-20% 0px 0px 0px ',
    threshold: [0, 0.97]
};

const observer = new IntersectionObserver((entries) => {
    let selecLastOne;
    entries.forEach((entry) => {
        const index = sectionIds.indexOf(`#${entry.target.id}`)
        visibleSections[index] = entry.isIntersecting
        selecLastOne = index === sectionIds.length - 1
            && entry.isIntersecting
            && entry.intersectionRatio >= 0.95
    });
    const headerIndex = selecLastOne ? sectionIds.length - 1 : firstTrueIndex(visibleSections);
    const newActiveHeader = headerMenu[headerIndex];
    changeHeaderActive(newActiveHeader);

}, options);

const changeHeaderActive = (newActiveHeader) => {
    activeHeader.classList.remove('active');
    activeHeader = newActiveHeader;
    activeHeader.classList.add('active');

};

const firstTrueIndex = (visibleSections) => {
    const index = visibleSections.indexOf(true);
    return index >= 0 ? index : 0
};

section.forEach((section) => observer.observe(section));

