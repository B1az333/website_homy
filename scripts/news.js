import {NEWS} from './config.js';

createNews(NEWS);

function createNews(items) {
    const newContainer = document.querySelectorAll('.company-news__container');


    if(items.length === 0) {
        displayNone(newContainer[0].parentElement);

        const sectionBanner = document.querySelector('.banner').parentElement;
        sectionBanner.style.justifyContent='center';
    }

    randomNewItems(items).forEach((item, index)=> {
        newContainer[index].insertAdjacentHTML("beforeend", createNodeProduct(item));
    })
}

function randomNewItems(items){
    const randomNum = randomInteger(0, items.length-3);
    return items.slice(randomNum, randomNum+3)
}

function randomInteger(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand); 
  }

function createNodeProduct({date, title, description, img}){
   const dateNews = new Date(date.replace("/", "-"));

   let a = dateNews.getMonth();

   return `
        <div class="company-news__body">
            <div>
                <img src="${img ? img : ''}" alt="image">
            </div>
            <figure>
                <div class="company-news__frontground-image">
                <span>${dateNews.getDate()}</span>
                </div>
                <figcaption>
                ${monthRusName(dateNews.getMonth())}
                </figcaption>
            </figure>
        </div>
        <div class="company-news__text">
            <p>${title}</p>
            <p>${description}</p>
        </div>
    `;
}

function monthRusName(number){
    switch(number){
        case 0: return 'января';
        case 1: return 'февраля';
        case 2: return 'марта';
        case 3: return 'апреля';
        case 4: return 'мая';
        case 5: return 'июня';
        case 6: return 'июля';
        case 7: return 'августа';
        case 8: return 'сентября';
        case 9: return 'октября';
        case 10: return 'ноября';
        case 11: return 'декабря';
    }
}

function displayNone(...rest) {
    rest.forEach(item => item.style.display = 'none');
}