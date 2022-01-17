import {MENU} from './config.js';

sliderNav(MENU)

function createNodeNav({title}){
    const navLi = document.createElement('li');
    navLi.innerText = title;
    return navLi;
}

function sliderNav(items){
    const leftSlider = document.querySelector('.navigation__container').children[0];
    const rightSlider = document.querySelector('.navigation__container').children[1];

    leftSlider.lastChild.style.display='none';
    if(items.length < 11) rightSlider.lastChild.style.display='none';

    let leftActive;
    let rightActive;

    items.forEach((item, index) => {
        const node = createNodeNav(item);

        if(index === 0) leftActive = node;

        if(index > 9) node.style.display='none';
        else rightActive = node;

        rightSlider.before(node);
    });

    leftSlider.addEventListener('click', () => {
            if(leftSlider !== leftActive.previousElementSibling){
                rightSlider.lastChild.style.display='block';
                if(leftSlider === leftActive.previousElementSibling.previousElementSibling) leftSlider.lastChild.style.display='none';

                leftActive = leftActive.previousElementSibling;
                leftActive.style.display='block';

                rightActive.style.display='none';
                rightActive = rightActive.previousElementSibling;
            }
            else leftSlider.lastChild.style.display='none';
    });

    rightSlider.addEventListener('click', () => {
        if(rightSlider !== rightActive.nextElementSibling){
            leftSlider.lastChild.style.display='block';
            if(rightSlider === rightActive.nextElementSibling.nextElementSibling) rightSlider.lastChild.style.display='none';
        
            rightActive = rightActive.nextElementSibling;
            rightActive.style.display='block';
        
            leftActive.style.display='none';
            leftActive = leftActive.nextElementSibling;
        }
        else rightSlider.lastChild.style.display='none';
    });
}