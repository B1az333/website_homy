import {MENU} from './config.js';

sliderNav(MENU)

function sliderNav(items){
    if(items.length === 0) {
        const nav = document.querySelector('#navigation');
        displayNone(nav);
        return;
    }

    const leftSlider = document.querySelector('.navigation__container').children[0];
    const rightSlider = document.querySelector('.navigation__container').children[1];

    displayNone(leftSlider.lastChild);
    if(items.length < 11) displayNone(rightSlider.lastChild);

    let leftActive;
    let rightActive;

    items.forEach((item, index) => {
        const node = createNodeNav(item);

        if(index === 0) leftActive = node;

        if(index > 9) displayNone(node);
        else rightActive = node;

        rightSlider.before(node);
    });

    leftSlider.addEventListener('click', () => {
            if(leftSlider !== leftActive.previousElementSibling){
                displayBlock(rightSlider.lastChild);
                if(leftSlider === leftActive.previousElementSibling.previousElementSibling) displayNone(leftSlider.lastChild);

                leftActive = leftActive.previousElementSibling;
                displayBlock(leftActive);

                displayNone(rightActive);
                rightActive = rightActive.previousElementSibling;
            }
            else leftSlider.lastChild.style.display='none';
    });

    rightSlider.addEventListener('click', () => {
        if(rightSlider !== rightActive.nextElementSibling){
            displayBlock(leftSlider.lastChild);
            if(rightSlider === rightActive.nextElementSibling.nextElementSibling) displayNone(rightSlider.lastChild);
        
            rightActive = rightActive.nextElementSibling;
            displayBlock(rightActive);
        
            displayNone(leftActive);
            leftActive = leftActive.nextElementSibling;
        }
        else rightSlider.lastChild.style.display='none';
    });
}

function createNodeNav({title}){
    const navLi = document.createElement('li');
    navLi.innerText = title;
    return navLi;
}

function displayBlock(...rest) {
    rest.forEach(item => item.style.display = 'block');
}

function displayNone(...rest) {
    rest.forEach(item => item.style.display = 'none');
}