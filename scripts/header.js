import {TOP_MENU} from './config.js';

const headerMenu = document.querySelector('.header-menu');

for(let item in TOP_MENU){
    headerMenu.append(createHeaderLi(TOP_MENU[item]))
}


const burgerMenu = document.querySelector('.header-menu');
document.querySelector('.header-menu-burger').children[1].addEventListener('click', () => {
    burgerMenu.style.display = (burgerMenu.style.display === 'block') ? 'none' : 'block';
});
document.querySelector('.header-menu-burger').children[0].addEventListener('click', () => {
    burgerMenu.style.display = (burgerMenu.style.display === 'block') ? 'none' : 'block';
});


function createHeaderLi({title, submenu}){

    const linkContainer = document.createElement('li');

    const link = document.createElement('a');
    link.className='header-menu__sub-link';
    link.href='#';
    link.innerText=title + ' ';

    linkContainer.append(link);

    if(submenu) {
        const submenuImg = document.createElement('img');
        submenuImg.src='/img/header-nav.svg';
        submenuImg.alt='ico';

        linkContainer.append(submenuImg);
        linkContainer.append(createSubmenu(submenu));
    }

    return linkContainer;
}

function createSubmenu(submenu){
    const submenuUl = document.createElement('ul');
    submenuUl.className='header-menu__sub-list';

    submenu.forEach(item => {
        submenuUl.append(createHeaderSubLi(item));
    });

    return submenuUl;
}

function createHeaderSubLi({title}){
    const subLinkContainer = document.createElement('li');

    const subLink = document.createElement('a');
    subLink.className='header-menu__sub-link';
    subLink.href='#';
    subLink.innerText=title;

    subLinkContainer.append(subLink)

    return subLinkContainer;
}