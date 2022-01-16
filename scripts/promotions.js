import {PROMOTIONS} from './config.js';
import findProductsContainer from './products.js'

const SECTION_NAME_PROMO = 'promotions';

const promoContainer = findProductsContainer(SECTION_NAME_PROMO);

PROMOTIONS.forEach(item => {
    promoContainer.insertAdjacentHTML("beforeend", createNodePromo(item));
});

function createNodePromo({img, title,description, time_action}){
    const {days, hours, minutes} = time_action ? timerDataConversion(time_action) : {days:0, hours:0, minutes:0};

    return `
        <div class="promotions__body products__body_line">
          <p class="promotions-name">
            <a class="promotions-name__text" href="#">${title}</a>
          </p>

          <figure class="promotions__image">
            <img src="${img}"
                 alt="image">
            <figcaption>${description}</figcaption>
          </figure>

          <div class="promotions-validity__container">
            <div class="promotions-validity__text">
              <span>Срок действия:</span>
            </div>

            ${time_action? `<div class="promotions-timer">
              <div class="promotions-timer__container">
                <div class="promotions-timer__body">
                  <div class="promotions-timer__block">${Math.trunc(days/10)}</div>
                  <div class="promotions-timer__block">${days%10}</div>
                </div>
                <div class="promotions-timer__info">дней</div>
              </div>

              <div class="promotions-timer__separator">:</div>


              <div class="promotions-timer__container">
                <div class="promotions-timer__body">
                  <div class="promotions-timer__block">${Math.trunc(hours/10)}</div>
                  <div class="promotions-timer__block">${hours%10}</div>
                </div>
                <div class="promotions-timer__info">часов</div>
              </div>

              <div class="promotions-timer__separator">:</div>

              <div class="promotions-timer__container">
                <div class="promotions-timer__body">
                  <div class="promotions-timer__block">${Math.trunc(minutes/10)}</div>
                  <div class="promotions-timer__block">${minutes%10}</div>
                </div>
                <div class="promotions-timer__info">минут</div>
              </div>
            </div>`:
            `<div class="promotions-timer_indefinitely">
                <span>Бессрочно</span>
            </div>`}
          </div>

          <p class="promotions-link">
            <a class="promotions-link__text" href="#">Подробнее</a>
          </p>
        </div>`;
}

function timerDataConversion(data){
  data = data.split(/d |h |m/);

  const days = Number(data[0]);
  const hours = Number(data[1]);
  const minutes = Number(data[2]);

  return {days, hours, minutes};
}