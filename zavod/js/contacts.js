const headerTel = document.querySelector('.header__tel');
const headerIconLinks = document.querySelector('.header__icon_links');
const headerBottomRow = document.querySelector('.header__bottom_row');
const headerTopRow = document.querySelector('.header__top_row');
const headerBurger = document.querySelector('.header__burger');
const mobileMenu = document.querySelector('.header__nav_wr');
const headerLogoTextWr = document.querySelector('.header__logo_text_wr');
const headerSearchForm = document.querySelector('.header__search_form');

const mediaQuery959 = window.matchMedia('(max-width: 959px)');
const mediaQuery639 = window.matchMedia('(max-width: 639px)');

function handleTabletChange959(e) {
    if (e.matches) {
        headerBottomRow.insertBefore(headerTel, headerIconLinks);
        mobileMenu.prepend(headerSearchForm);
    } else {
        headerTopRow.append(headerTel);
        headerTopRow.insertBefore(headerSearchForm, headerTel);
    }
}
mediaQuery959.addListener(handleTabletChange959);
handleTabletChange959(mediaQuery959);

function handleTabletChange639(e) {
    if (e.matches) {
        headerLogoTextWr.append(headerBurger);
    } else {
        headerIconLinks.append(headerBurger);
    }
}
mediaQuery639.addListener(handleTabletChange639);
handleTabletChange639(mediaQuery639);

headerBurger.onclick = function () {
    document.body.classList.toggle('this--overflow');
    headerBurger.classList.toggle('burger-open');
    mobileMenu.classList.toggle('menu-open');
};
let scriptMap = document.createElement('script');
scriptMap.src = 'https://api-maps.yandex.ru/2.1/?apikey=dd0f5e76-e8bb-42be-b558-f7af3b491cd2&lang=ru_RU';
setTimeout(() => document.head.append(scriptMap), 0);
scriptMap.onload = function () {
    ymaps.ready(init);
};

function init() {
    var myMap = new ymaps.Map("map", {
        center: [59.925543, 30.411278],
        zoom: 14,
        controls: []
    });
    myMap.controls.add('zoomControl', {
        float: 'none',
        position: {
            top: '40px',
            right: '20px'
        }
    });
    var myPlacemark = new ymaps.Placemark([59.925543, 30.411278], {}, {
        iconLayout: 'default#image',
        iconImageHref: '/img/contacts/map_point.png',
        iconImageSize: [35, 50],
        iconImageOffset: [0, -60]
    });
    myMap.geoObjects.add(myPlacemark);
};
let onlyLetterRus = document.querySelectorAll('.only_letter_rus');
let onlyEng = document.querySelectorAll('.only_eng');

if (onlyLetterRus) {
    for (let i = 0; i < onlyLetterRus.length; i++) {
        onlyLetterRus[i].addEventListener('keyup', function () {
            this.value = this.value.replace(/[\w]/g, '');
        });
    }

}
if (onlyEng) {
    for (let i = 0; i < onlyEng.length; i++) {
        onlyEng[i].addEventListener('keyup', function () {
            this.value = this.value.replace(/[^A-Za-z0-9]/g, '');
        });
    }
};