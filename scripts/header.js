import {TOP_MENU} from './config.js';

createHeaderMenu(TOP_MENU);

function createHeaderMenu(items){
    const headerMenu = document.querySelector('.header-menu');

    for(let item in items){
        headerMenu.append(createHeaderLi(items[item]))
    }

    document.querySelector('.header-menu-burger').children[1].addEventListener('click', () => {
        headerMenu.style.display = (headerMenu.style.display === 'block') ? 'none' : 'block';
    });
    document.querySelector('.header-menu-burger').children[0].addEventListener('click', () => {
        headerMenu.style.display = (headerMenu.style.display === 'block') ? 'none' : 'block';
    });

    const mediaQuery = window.matchMedia(`(max-width:1440px)`);

    mediaQuery.addEventListener("change", (media) => {
        if (media.matches) displayNone(headerMenu);
        else displayFlex(headerMenu);
    });
}


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

function displayFlex(...rest) {
    rest.forEach(item => item.style.display = 'flex');
}

function displayNone(...rest) {
    rest.forEach(item => item.style.display = 'none');
}




// function mediaQueryListener(media, ...rest) {
//     const mediaQuery = window.matchMedia(`(max-width:${media}px)`);

//     const windowInnerWidth = window.innerWidth;

//     if (windowInnerWidth < media)  displayFlex(...rest);
//     else displayNone(...rest);

//     mediaQuery.addEventListener("change", (media) => {
//         if (media.matches) displayFlex(...rest);
//         else displayNone(...rest);
//     });
// }