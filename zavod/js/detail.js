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

new Swiper('.detail_slider', {
    speed: 700,
    slidesPerView: 2,
    slidesPerGroup: 2,
    spaceBetween: 15,
    loop: true,
    navigation: {
        nextEl: '.detail__slider_btn_next',
        prevEl: '.detail__slider_btn_prev'
    },
    pagination: {
        el: '.detail__slider_pagination',
        clickable: true,
    },
    breakpoints: {
        639: {
            spaceBetween: 15,
            slidesPerView: 3,
            slidesPerGroup: 3,
        },
        1200: {
            spaceBetween: 15,
            slidesPerView: 4,
            slidesPerGroup: 4,
        },
        1300: {
            spaceBetween: 40,
            slidesPerView: 4,
            slidesPerGroup: 4,
        }
    }
});

let itemCards = document.querySelectorAll('.item_card');
let addPopup = document.querySelector('.add_popup');
let timerPopup;
let errorPopup = document.querySelector('.error_popup');
let timerError;

for (let i = 0; i < itemCards.length; i++) {
    let itemCardBtnfirst = itemCards[0].querySelector('.item_card__btn');
    let itemCardBtn = itemCards[i].querySelector('.item_card__btn');
    let itemCardOrdering = itemCards[i].querySelector('.item_card__ordering')
    let itemCardOrderingMinus = itemCards[i].querySelector('.item_card__ordering_minus');
    let itemCardOrderingValue = itemCards[i].querySelector('.item_card__ordering_value');
    let itemCardOrderingPlus = itemCards[i].querySelector('.item_card__ordering_plus');

    let inOrderCount = '';

    itemCardBtn.onclick = () => {
        itemCardBtn.classList.add('hidden');
        itemCardOrdering.classList.add('show');
        inOrderCount++;
        itemCardOrderingValue.innerHTML = inOrderCount;
        addPopup.classList.add('show');
        if(typeof(timerPopup) != 'undefined') {
            clearTimeout(timerPopup);
        }

        timerPopup = setTimeout(() => {
            addPopup.classList.remove('show');
        }, 3000);
    }
    itemCardBtnfirst.onclick = () => {
        errorPopup.classList.add('show');
        if(typeof(timerError) != 'undefined') {
            clearTimeout(timerError);
        }

        timerError = setTimeout(() => {
            errorPopup.classList.remove('show');
        }, 3000);
    }
    itemCardOrderingMinus.onclick = () => {
        inOrderCount--;
        itemCardOrderingValue.innerHTML = inOrderCount;
        if (inOrderCount < 1) {
            itemCardBtn.classList.remove('hidden');
            itemCardOrdering.classList.remove('show');
        }
    }
    itemCardOrderingPlus.onclick = () => {
        inOrderCount++;
        itemCardOrderingValue.innerHTML = inOrderCount;
    }
}

let detailBtn = document.querySelector('.detail__btn');
let detailHiddenBtns = document.querySelector('.detail__hidden_btns');
let detailOrderingMinus = document.querySelector('.detail__ordering_minus');
let detailOrderingValue = document.querySelector('.detail__ordering_value');
let detailOrderingPlus = document.querySelector('.detail__ordering_plus');
let detailOrderCount = 0;

detailBtn.onclick = () => {
    detailBtn.classList.remove('show');
    detailHiddenBtns.classList.add('show');
    detailOrderCount++;
    detailOrderingValue.innerHTML = detailOrderCount;
}
detailOrderingMinus.onclick = () => {
    detailOrderCount--;
    detailOrderingValue.innerHTML = detailOrderCount;
    if (detailOrderCount < 1) {
        detailBtn.classList.add('show');
        detailHiddenBtns.classList.remove('show');
    }
}
detailOrderingPlus.onclick = () => {
    detailOrderCount++;
    detailOrderingValue.innerHTML = detailOrderCount;
}

let detailServicesItem = document.querySelectorAll('.detail__services_item');
for (let i = 0; i < detailServicesItem.length; i++) {
    let detailServicesItemBtn = detailServicesItem[i].querySelector('.detail__services_item_btn');
    let detailServicesItemHiddenBlock = detailServicesItem[i].querySelector('.detail__services_item_hidden_block');
    let detailServicesItemHiddenBlockBtn = detailServicesItem[i].querySelector('.detail__services_item_hidden_block_btn');

    detailServicesItemBtn.onclick = () => {
        detailServicesItemBtn.classList.remove('show');
        detailServicesItemHiddenBlock.classList.add('show');
        detailServicesItem[i].classList.add('active');
    }
    detailServicesItemHiddenBlockBtn.onclick = () => {
        detailServicesItemBtn.classList.add('show');
        detailServicesItemHiddenBlock.classList.remove('show');
        detailServicesItem[i].classList.remove('active');
    }
}
