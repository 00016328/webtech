// storing all needed selectors from html in variables
let icon = document.querySelector('.navbar_icon'),
    header = document.querySelector('header'),
    body = document.querySelector('body'),
    accLink = document.querySelectorAll('.accordion_header'),
    accordion = document.querySelectorAll('.accordion_box'),
    mainAccordion = document.querySelectorAll('.accordion.faq'),
    accNav = document.querySelectorAll('.faq_nav_block>li'),
    
    range = document.querySelector('input[name="range"]'),
    numberIn = document.querySelector('input[name="quantity"]'),

    save = document.querySelector('.goals_inputs_right_descr.save>span'),
    amount = document.querySelector('.goals_inputs_right_descr.amount>span'),

    line = document.querySelector('.range_line_bg');

// function for mobile view to show the menu
icon.addEventListener('click', function () {
    if (header.classList.contains('show_navbar')) {
        body.style = 'overflow: scroll; position: static;'
        icon.style = 'transform: rotate(0deg);';
    }
    else {
        icon.style = 'transform: rotate(180deg);';
        body.style = 'overflow: hidden; position: fixed; top: 0;'
    }
    header.classList.toggle('show_navbar')
})
// function for accordion
for (let i = 0; i < accordion.length; i++) {
    accLink[i].addEventListener('click', function () {
        accordion[i].classList.toggle('open')
    })
}
// function to change the section to shaw accordion in FAQ page
for (let i = 0; i < mainAccordion.length; i++) {
    accNav[i].addEventListener('click', function (e) {
        e.preventDefault();

        for (let a = 0; a < mainAccordion.length; a++) {
            mainAccordion[a].classList.remove('active');
            accNav[a].classList.remove('active');
        }

        mainAccordion[i].classList.add('active');
        accNav[i].classList.add('active');

    })
}
// function for inputs to calculate the deposits
const func = (outMin, outMax, inMin, inMax) =>
    v => outMin + (outMax - outMin) * (v - inMin) / (inMax - inMin);
function rangeChange(a) {
    numberIn.value = a
    amount.innerHTML = Math.round(a * 0.019534247)
    save.innerHTML = Math.round(a * 0.46)
    let boundFunc = func(0, 100, 500000, 1000000000);
    let out = boundFunc(a);
    line.style = `width: ${out}%;`
}
function numberChange(a) {
    range.value = a
    amount.innerHTML = Math.round(a * 0.019534247)
    save.innerHTML = Math.round(a * 0.46)
}