import {BUYING_RIGHT_NOW} from './config.js';

const buyNowContainer = document.querySelector(".buy-now__container");

for(let i=0; i<4;i++){
    buyNowContainer.insertAdjacentHTML("beforeend", createNodeBuyNow(BUYING_RIGHT_NOW[i]));
}

function createNodeBuyNow({img, title}){
    return `
    <figure class="products__image">
        <img src="${img}"
            alt="image">
    <figcaption class="products__text"><a href="#">${title}</a></figcaption>
    </figure>`;
}