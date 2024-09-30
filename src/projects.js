'use strict'

const allBtn = document.querySelector('.all')
const frontBtn = document.querySelector('.front-end')
const backBtn = document.querySelector('.back-end')
const mobileBtn = document.querySelector('.mobile-btn')

const frontEnd = document.querySelectorAll('.front')
const backEnd = document.querySelectorAll('.back')
const mobile = document.querySelectorAll('.mobile')

const frontEndArr = [...frontEnd]
const backEndArr = [...backEnd]
const mobileArr = [...mobile]

allBtn.addEventListener('click', () => {
    frontEndArr.forEach(type => type.style.display = 'flex'
    );
    backEndArr.forEach(type => type.style.display = 'flex'
    );
    mobileArr.forEach(type => type.style.display = 'flex'
    );
    allBtn.classList.add('category--selected')
    frontBtn.classList.remove('category--selected')
    backBtn.classList.remove('category--selected')
    mobileBtn.classList.remove('category--selected')
});
frontBtn.addEventListener('click', () => {
    frontEndArr.forEach(type => type.style.display = 'flex'
    );
    backEndArr.forEach(type => type.style.display = 'none'
    );
    mobileArr.forEach(type => type.style.display = 'none'
    );
    allBtn.classList.remove('category--selected')
    frontBtn.classList.add('category--selected')
    backBtn.classList.remove('category--selected')
    mobileBtn.classList.remove('category--selected')
});
backBtn.addEventListener('click', () => {
    frontEndArr.forEach(type => type.style.display = 'none'
    );
    backEndArr.forEach(type => type.style.display = 'flex'
    );
    mobileArr.forEach(type => type.style.display = 'none'
    );
    allBtn.classList.remove('category--selected')
    frontBtn.classList.remove('category--selected')
    backBtn.classList.add('category--selected')
    mobileBtn.classList.remove('category--selected')
});
mobileBtn.addEventListener('click', () => {
    frontEndArr.forEach(type => type.style.display = 'none'
    );
    backEndArr.forEach(type => type.style.display = 'none'
    );
    mobileArr.forEach(type => type.style.display = 'flex'
    );
    allBtn.classList.remove('category--selected')
    frontBtn.classList.remove('category--selected')
    backBtn.classList.remove('category--selected')
    mobileBtn.classList.add('category--selected')
});

