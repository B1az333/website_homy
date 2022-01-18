import {BANNER} from './config.js';

const sliderSwitchTime = 7; // seconds

createCaruselSlider(BANNER);

function createCaruselSlider(items){
    if(items.length === 0){
        const banner = document.querySelector('.banner');
        displayNone(banner);

        const news = document.querySelector('.company-news');
        news.style.width = '100%';

        return;
    }

    createBanner(items);

    const currentSlide = caruselNumberSlide(items);

    const leftIcoSlide = document.querySelector('.banner-slider-inside__strike').children[0].children[0];
    const rightIcoSlide = document.querySelector('.banner-slider-inside__strike').children[1].children[0];

    if(items.length < 2) displayNone(leftIcoSlide, rightIcoSlide);

    leftIcoSlide.addEventListener('click', () => {
        installSlide(currentSlide('left'));
    })
    rightIcoSlide.addEventListener('click', () => {
        installSlide(currentSlide('right'));
    })

    const sliderContainer = document.querySelector('.banner-slider');
    let timerId = setInterval(() => installSlide(currentSlide('right')), sliderSwitchTime * 1000);

    sliderContainer.onmouseover = () => {
        clearInterval(timerId);
    };

    sliderContainer.onmouseout = () => {
        timerId = setInterval(() => installSlide(currentSlide('right')), sliderSwitchTime * 1000);
    };

    
    const trackers = document.querySelector('.banner-slider-inside__track').children;
 
    for (let i = 0; i < trackers.length; i++){
        trackers[i].addEventListener('click', () => {
            installSlide(i);
        })
    }
}

function installSlide(number) {
    let slides = document.querySelector('.banner-slider__image');

    slides.classList.add('animation');

    slides.style.transform=`translateX(-${number*100}%)`; 

    setActiveTracker(number);
}

function setActiveTracker(number){
    const trackers = document.querySelector('.banner-slider-inside__track').children;

    for (let i = 0; i < trackers.length; i++){
        trackers[i].className='banner-slider-inside__track_not-active';
    }
    trackers[number].className='banner-slider-inside__track_active';
}

function createBanner(items){
    const imgBanner = document.querySelector('.banner-slider__image');
    const trackBanner = document.querySelector('.banner-slider-inside__track');

    if(items.length < 2) displayNone(trackBanner);
    
    items.forEach((item, index) => {
        imgBanner.insertAdjacentHTML('beforeend', createImgBanner(item));
        trackBanner.insertAdjacentHTML('beforeend', createTrackBanner(index));
    })
}

function createTrackBanner(index){
    return `<div class="banner-slider-inside__track_${(index === 0) ? 'active' : 'not-active'}"></div>`;
}

function createImgBanner({img}){
    return `<img src="${img}" alt="photo"></img>`;
}

function caruselNumberSlide(items){
    let numberSlide = 0;

    const maxNumberSlide = items.length;

    return (direction) => {
        if(direction === 'left'){
            numberSlide = (numberSlide - 1 < 0) ? maxNumberSlide - 1 : numberSlide - 1;
        }
        else if(direction === 'right'){
            numberSlide = (numberSlide + 1 === maxNumberSlide) ? 0 : numberSlide + 1;
        }
        return numberSlide;
    }
}

function displayNone(...rest) {
    rest.forEach(item => item.style.display = 'none');
}