import {ITEMS} from './config.js';
import {CURRENCY, CURRENCY_EXCHANGE} from './config.js';

const SECTION_NAME_NEW = 'new-products';
const SECTION_NAME_RECOMMENDED = 'recommendations';
const SECTION_NAME_SALE = 'sales';

const mediaQueries = [750, 980, 1440];

const bucket = (function () {
    let countProducts = 0;
    let priceProducts = 0;

    updateBucket(countProducts, priceProducts);

    return function ({ price, currency }) {
        countProducts++;
        priceProducts += price * CURRENCY_EXCHANGE[currency];

        updateBucket(countProducts, priceProducts);
    };
})();

let NEW_ITEMS = ITEMS.filter((item) => item.type === 'new' && item.price);
let RECOMMENDED_ITEMS = ITEMS.filter((item) => item.type === 'recommended' && item.price);
let SALE_ITEMS = ITEMS.filter((item) => item.type === 'sale' && item.price);

NEW_ITEMS = NEW_ITEMS.sort((itemX, itemY) => {
    const dateX = new Date(itemX.date.replace('/', '-'));
    const dateY = new Date(itemY.date.replace('/', '-'));

    if (dateX > dateY) return 1;
    if (dateX < dateY) return -1;
    return 0;
});

RECOMMENDED_ITEMS = RECOMMENDED_ITEMS.sort((itemX, itemY) => {
    const priceX = itemX.price * CURRENCY_EXCHANGE[itemX.currency];
    const priceY = itemY.price * CURRENCY_EXCHANGE[itemY.currency];

    if (priceX > priceY) return 1;
    if (priceX < priceY) return -1;
    return 0;
});

SALE_ITEMS = SALE_ITEMS.sort((itemX, itemY) => {
    const diffPriceX =
        itemX.price * CURRENCY_EXCHANGE[itemX.currency] -
        itemX.oldPrice * CURRENCY_EXCHANGE[itemX.currency];
    const diffPriceY =
        itemY.price * CURRENCY_EXCHANGE[itemY.currency] -
        itemY.oldPrice * CURRENCY_EXCHANGE[itemY.currency];

    if (diffPriceX > diffPriceY) return 1;
    if (diffPriceX < diffPriceY) return -1;
    return 0;
});

createProducts(SECTION_NAME_NEW, NEW_ITEMS);
createProducts(SECTION_NAME_RECOMMENDED, RECOMMENDED_ITEMS);
createProducts(SECTION_NAME_SALE, SALE_ITEMS);

function createProducts(sectionName, items) {
    const productContainer = findProductsContainer(sectionName);

    if(items.length === 0) displayNone(productContainer.parentElement);//

    const outputProducts = items.length > 4 ? items.slice(0, 4) : items;

    outputProducts.forEach((item) => {
        productContainer.append(createNodeProduct(item));
    });

    if (items.length > 1) {
        const moveSlider = sliderMove();
        createLowMediaSlider(productContainer.parentElement.children, items, moveSlider);
        productContainer.prepend(createSliderIco('left', items, productContainer, moveSlider));
        productContainer.append(createSliderIco('right', items, productContainer, moveSlider));
    }
}

function createNodeProduct({ type, description, img, price, oldPrice, currency }) {
    const pimp =
        type === 'new'
            ? `
        <div class="bookmark__body">
            <img src="/img/bookmark-green.svg" alt="bookmark">
            <div class="bookmark__text">New</div>
        </div>
    `
            : type === 'recommended'
            ? `
        <div class="bookmark__body">
            <img src="/img/bookmark-yellow.svg" alt="bookmark">
        </div>
    `
            : `
        <div class="bookmark__body">
            <img src="/img/bookmark-blue.svg" alt="bookmark">
            <div class="bookmark__text bookmark__text_high-char">%</div>
        </div>
    `;

    let currencySymbol = symbolCurrency(currency);

    let divProdBody = document.createElement('div');
    divProdBody.className = 'products__body products__body_line';
    divProdBody.insertAdjacentHTML(
        'beforeend',
        `
        <div class="bookmark__container">${pimp}</div>
    
        <figure class="products__image">
            <img src="${img ? img : ''}"
                alt="image">
            <figcaption class="products__text"><a href="#">${description}</a></figcaption>
        </figure>

        <div class="price">
            <span>Цена:</span>
            <span class="current-price">${price} ${currencySymbol}.</span>
            <span class="previous-price">${
                oldPrice ? oldPrice + ' ' + currencySymbol + '.' : ''
            }</span>
        </div>
    `,
    );

    let buttonBuy = document.createElement('div');
    buttonBuy.className = 'button-buy__container';
    buttonBuy.append(createButtonBuy({ price, currency }));
    buttonBuy.insertAdjacentHTML('beforeend', '<a href="#">Подробнее</a>');

    divProdBody.append(buttonBuy);

    return divProdBody;
}

function createButtonBuy(item) {
    let button = document.createElement('button');
    button.className = 'button__body button__body_orange';
    button.insertAdjacentHTML(
        'afterbegin',
        `<img src="/img/cart.svg" alt="cart-icon"><span>Купить</span>`,
    );

    button.addEventListener('click', () => {
        bucket(item);
    });

    return button;
}

function createSliderIco(direction, items, sectionContainer, moveSlider) {
    let divSlider = document.createElement('div');
    divSlider.className = 'products__slider';
    divSlider.insertAdjacentHTML(
        'beforeend',
        `<img src="/img/large-ico-slider-${direction}.svg" alt="${direction}-ico">`,
    );

    if (items.length <= 4) displayNone(divSlider);

    if (direction === 'left') {
        divSlider.addEventListener('click', () => {
            removeFirstProduct(sectionContainer);

            sectionContainer.children[sectionContainer.children.length - 1].before(
                createNodeProduct(moveSlider(items, direction)),
            );
        });
    } else {
        divSlider.addEventListener('click', () => {
            removeLastProduct(sectionContainer);

            sectionContainer.children[0].after(createNodeProduct(moveSlider(items, direction)));
        });
    }
    return divSlider;
}

function removeFirstProduct(sectionContainer) {
    sectionContainer.children[1].remove();
}

function removeLastProduct(sectionContainer) {
    sectionContainer.children[sectionContainer.children.length - 2].remove();
}

function sliderMove() {
    let currentStart = 0;

    return (items, direction) => {
        if (direction === 'left') {
            currentStart = --currentStart < 0 ? items.length - 1 : currentStart;
            return items[currentStart];
        }
        if (direction === 'right') {
            currentStart = ++currentStart === items.length ? 0 : currentStart;

            return items[(currentStart + 3) % items.length];
        }
    };
}

function updateBucket(count, price) {
    document.querySelector('#count-products-in-bucket').textContent = count;
    document.querySelector('#price-products-in-bucket').textContent =
        ' / ' + price.toFixed(2) + symbolCurrency(CURRENCY) + '.';
    document.querySelector('.main-block-cart-money__count').firstElementChild.innerText = count;
}

function symbolCurrency(currency) {
    switch (currency) {
        case 'USD':
            return '$';
        case 'RUB':
            return '₽';
        case 'EUR':
            return '€';
        case 'UAH':
            return '₴';
    }
}

function createLowMediaSlider(sectionChildren, items, moveSlider) {
    const leftMediaSlider = sectionChildren[0].children[4].children[0];
    const rightMediaSlider = sectionChildren[0].children[4].children[1];

    const mediaSlider = sectionChildren[0].children[4];

    const titleImageSlider = sectionChildren[0].children[1];

    const sectionContainer = sectionChildren[1];

    const media =
        items.length > 4 ? mediaQueries[2] : items.length > 3 ? mediaQueries[1] : mediaQueries[0];

    mediaQueryListener(media, mediaSlider, titleImageSlider);

    leftMediaSlider.addEventListener('click', () => {
        removeFirstProduct(sectionContainer);
        sectionContainer.children[sectionContainer.children.length - 1].before(
            createNodeProduct(moveSlider(items, 'left')),
        );
    });
    rightMediaSlider.addEventListener('click', () => {
        removeLastProduct(sectionContainer);
        sectionContainer.children[0].after(createNodeProduct(moveSlider(items, 'right')));
    });
}

function mediaQueryListener(media, ...rest) {
    const mediaQuery = window.matchMedia(`(max-width:${media}px)`);

    const windowInnerWidth = window.innerWidth;

    if (windowInnerWidth < media)  displayFlex(...rest);
    else displayNone(...rest);

    mediaQuery.addEventListener("change", (media) => {
        if (media.matches) displayFlex(...rest);
        else displayNone(...rest);
    });
}

function displayFlex(...rest) {
    rest.forEach(item => item.style.display = 'flex');
}


function displayNone(...rest) {
    rest.forEach(item => item.style.display = 'none');
}

export default function findProductsContainer(sectionId){
    const promoContainers = Array.from(document.querySelectorAll(".products__container"));
    return promoContainers.find(node => node.parentNode.id===sectionId)
}