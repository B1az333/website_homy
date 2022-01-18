import {BUYING_RIGHT_NOW} from './config.js';

// const buyNowContainer = document.querySelector(".buy-now__container");

// for(let i=0; i<4;i++){
//     buyNowContainer.insertAdjacentHTML("beforeend", createNodeBuyNow(BUYING_RIGHT_NOW[i]));
// }

createBuyNow(BUYING_RIGHT_NOW);

function createBuyNow(items){
    const buyNowContainer = document.querySelector(".buy-now__container");

    if(items.length === 0) {
        displayNone(buyNowContainer.parentElement);
        return;
    }

    const maxLenght = (items.length < 4) ? items.length : 4;

    for(let i = 0; i < maxLenght; i++){
        buyNowContainer.insertAdjacentHTML("beforeend", createNodeBuyNow(items[i]));
    }
}

function createNodeBuyNow({img, title}){
    return `
    <figure class="products__image">
        <img src="${img ? img : ''}"
            alt="image">
    <figcaption class="products__text"><a href="#">${title}</a></figcaption>
    </figure>`;
}

function displayNone(...rest) {
    rest.forEach(item => item.style.display = 'none');
}