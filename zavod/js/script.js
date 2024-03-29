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
let mainSlider = new Swiper('.main_slider', {
    speed: 700,
    slidesPerView: 1,
    loop: true,
    autoHeight: true,
    navigation: {
        nextEl: '.main_slider__btn_next',
        prevEl: '.main_slider__btn_prev'
    },
    pagination: {
        el: '.main_slider__pagination',
        clickable: true,
    },
    // autoplay: {
    //     delay: 6850,
    //     disableOnInteraction: false,
    // },
});

window.addEventListener('load',() => {
    mainSlider.update();
});;
let map = document.getElementById('map');

if (map) {
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
            iconImageHref: './img/contacts/map_point.png',
            iconImageSize: [35, 50],
            iconImageOffset: [0, -60]
        });
        myMap.geoObjects.add(myPlacemark);
    }
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
let filter = document.querySelector('.filter');
if (filter) {
// аккордеоны фильтра

    $('.filter__item_title_wr').next().slideUp();

    $('.filter__item_title_wr').each(function () {
        if ($(this).next().hasClass('opened')) {
            $(this).next().slideDown();
        }
    });

    $('.filter__item_title_wr').click(function () {
        $(this).next().slideToggle().toggleClass("opened");
        $(this).find('.filter__item_arrow').toggleClass("rotate");
        filterFloatButton.classList.add('this--hidden');
    });

// высплывабщая кнопка фильтра и нижние кнопки

    let filterBody = document.querySelector('.filter__body');
    let radioButtons = filterBody.querySelectorAll('.filter__radio');
    let filterRadioLabel = filterBody.querySelectorAll('.filter__radio_label');
    let checkboxes = filterBody.querySelectorAll('input[type="checkbox"]');
    let filterFloatButton = filterBody.querySelector('.filter__float_button');
    let filterBtnsWr = document.querySelector('.filter__btns_wr');
    let timer;
    let activeCheckboxes = 0;
    for (let i = 0; i < checkboxes.length; i++) {
        checkboxes[i].addEventListener('change', () => {
            if (checkboxes[i].checked) {
                let topOfFloatButton = checkboxes[i].offsetTop - 13;
                filterFloatButton.style.top = `${topOfFloatButton}px`;
                filterFloatButton.classList.remove('this--hidden');
                if (typeof (timer) != 'undefined') {
                    clearTimeout(timer);
                }

                timer = setTimeout(() => {
                    filterFloatButton.classList.add('this--hidden');
                }, 10000);

                activeCheckboxes++;
            } else {
                activeCheckboxes--;
            }
            if (activeCheckboxes >= 1 && !filterBtnsWr.classList.contains('show')) {
                filterBtnsWr.classList.add('show');

            } else if (activeCheckboxes === 0) {
                filterBtnsWr.classList.remove('show');
                filterFloatButton.classList.add('this--hidden');
            }
        });
    }

    for (let i = 0; i < radioButtons.length; i++) {
        radioButtons[i].addEventListener('change', () => {
            if (radioButtons[i].checked) {
                let topOfFloatButton = filterRadioLabel[i].offsetTop - 13;
                filterFloatButton.style.top = `${topOfFloatButton}px`;
                filterFloatButton.classList.remove('this--hidden');
                if (typeof (timer) != 'undefined') {
                    clearTimeout(timer);
                }

                timer = setTimeout(() => {
                    filterFloatButton.classList.add('this--hidden');
                }, 10000);
            }
        });
    }

    let filterPriceInput = document.querySelectorAll('.filter__price_input');
    let filterPriceInputFlag = false;

    for (let i = 0; i < filterPriceInput.length; i++) {
        filterPriceInput[i].oninput = () => {
            let topOfFloatButton = filterPriceInput[i].offsetTop - 13;
            filterFloatButton.style.top = `${topOfFloatButton}px`;
            filterFloatButton.classList.remove('this--hidden');
            if (typeof (timer) != 'undefined') {
                clearTimeout(timer);
            }

            timer = setTimeout(() => {
                filterFloatButton.classList.add('this--hidden');
            }, 10000);
            if (!filterPriceInputFlag) {
                activeCheckboxes++;
                filterPriceInputFlag = true;
            }
            filterBtnsWr.classList.add('show');
        };
    }

// слайдер диапазона цены
    let initialMinimumValue = 10000;
    let initialMaximumValue = 1000000;
    $('#price_slider').slider({
        min: 0,
        max: 1000000,
        range: true,
        step: 10000,
        values: [10000, 1000000],
        stop: function (event, ui) {
            $("input#minCost").val($('#price_slider').slider("values", 0));
            $("input#maxCost").val($('#price_slider').slider("values", 1));
            let topOfFloatButton = $('#price_slider')[0].offsetTop - 27;
            filterFloatButton.style.top = `${topOfFloatButton}px`;
            filterFloatButton.classList.remove('this--hidden');
            if (typeof (timer) != 'undefined') {
                clearTimeout(timer);
            }

            timer = setTimeout(() => {
                filterFloatButton.classList.add('this--hidden');
            }, 10000);
            if (!filterPriceInputFlag) {
                activeCheckboxes++;
                filterPriceInputFlag = true;
            }
            filterBtnsWr.classList.add('show');
            filterBody.classList.add('this--big_pb');
        },
        slide: function (event, ui) {
            $("input#minCost").val($('#price_slider').slider("values", 0));
            $("input#maxCost").val($('#price_slider').slider("values", 1));
        }
    })

    $("input#minCost").change(function () {
        var value1 = $("input#minCost").val();
        var value2 = $("input#maxCost").val();
        if (parseInt(value1) > parseInt(value2)) {
            value1 = value2;
            $("input#minCost").val(value1);
        }
        $('#price_slider').slider("values", 0, value1);
    });
    $("input#maxCost").change(function () {
        var value1 = $("input#minCost").val();
        var value2 = $("input#maxCost").val();
        if (value2 > 1000000) {
            value2 = 1000000;
            $("input#maxCost").val(1000000)
        }
        if (parseInt(value1) > parseInt(value2)) {
            value2 = value1;
            $("input#maxCost").val(value2);
        }
        $('#price_slider').slider("values", 1, value2);
    });

// кнопка очистки формы

    let clearBtn = document.querySelector('.clear_btn');

    clearBtn.onclick = (e) => {
        e.preventDefault();
        $('#price_slider').slider("values", 0, initialMinimumValue);
        $('#price_slider').slider("values", 1, initialMaximumValue);
        filterBody.reset();
        filterFloatButton.classList.add('this--hidden');
        filterBtnsWr.classList.remove('show');
        activeCheckboxes = 0;
    }
// открытие/закрытие мобильного фильтра

    let catalogMobileFilterBtn = document.querySelector('.catalog__mobile_filter_btn');
    let filterCloseBtn = document.querySelector('.filter__close_btn');

    catalogMobileFilterBtn.onclick = () => {
        filter.classList.add('filter_open');
    }


    filterCloseBtn.onclick = () => {
        filter.classList.remove('filter_open');
    }

// тултип

    let filterItemTooltip = document.querySelector('.filter__item_tooltip');
    let filterItemTooltipBody = filterItemTooltip.querySelector('.filter__item_tooltip_body');

    let showTooltip = function (e) {
        if (e.matches) {
            filterItemTooltip.onclick = (e) => {
                e.stopPropagation();
                filterItemTooltipBody.classList.toggle('show');
            }
        }
    }
    mediaQuery959.addListener(showTooltip);
    showTooltip(mediaQuery959);
};
// показать/скрыть сортировку

let catalogSortBtn = document.querySelector('.catalog__sort_btn ');
if (catalogSortBtn) {
    let catalogSortRadioGroup = document.querySelector('.catalog__sort_radio_group');
    let catalogSortRadioLabel = document.querySelectorAll('.catalog__sort_radio_label');
    let catalogSortBtnArrow = document.querySelector('.catalog__sort_btn_arrow');

    for (let label of catalogSortRadioLabel) {
        label.onclick = () => {
            catalogSortRadioGroup.classList.add('this--hidden');
        }
    }

    catalogSortBtn.onclick = () => {
        catalogSortRadioGroup.classList.toggle('this--hidden');
        catalogSortBtnArrow.classList.toggle('rotate');
    }

// радиокнопки сортировки

    let sortRadioInputs = document.querySelectorAll('input[name="sort"]');
    let catalogSortBtnValue = document.querySelector('.catalog__sort_btn_value');

    for (let sort of sortRadioInputs) {
        sort.onchange = () => {
            if (sort.checked) {
                catalogSortBtnValue.textContent = sort.value;
            }
        }
    }

    $('.select').SumoSelect();

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
            if (typeof (timerPopup) != 'undefined') {
                clearTimeout(timerPopup);
            }

            timerPopup = setTimeout(() => {
                addPopup.classList.remove('show');
            }, 3000);
        }
        itemCardBtnfirst.onclick = () => {
            errorPopup.classList.add('show');
            if (typeof (timerError) != 'undefined') {
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

}

;
let catalogSlider = new Swiper('.catalog_slider', {
    speed: 700,
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 20,
    autoHeight: true,
    navigation: {
        nextEl: '.catalog_reviews__slider_btn_next',
        prevEl: '.catalog_reviews__slider_btn_prev'
    },
    pagination: {
        el: '.catalog_reviews__slider_pagination',
        clickable: true,
    },
    breakpoints: {
        967: {
            spaceBetween: 40,
            slidesPerView: 2,
            slidesPerGroup: 2
        }
    }
});

window.addEventListener('load',() => {
    catalogSlider.update();
});;

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
let itemCardsDetail = document.querySelectorAll('.item_card');
if (itemCardsDetail) {

    let addPopupDetail = document.querySelector('.add_popup');
    let timerPopupDetail;
    let errorPopupDetail = document.querySelector('.error_popup');
    let timerErrorDetail;

    for (let i = 0; i < itemCardsDetail.length; i++) {
        let itemCardBtnfirstDetail = itemCardsDetail[0].querySelector('.item_card__btn');
        let itemCardBtnDetail = itemCardsDetail[i].querySelector('.item_card__btn');
        let itemCardOrderingDetail = itemCardsDetail[i].querySelector('.item_card__ordering')
        let itemCardOrderingMinusDetail = itemCardsDetail[i].querySelector('.item_card__ordering_minus');
        let itemCardOrderingValueDetail = itemCardsDetail[i].querySelector('.item_card__ordering_value');
        let itemCardOrderingPlusDetail = itemCardsDetail[i].querySelector('.item_card__ordering_plus');

        let inOrderCountDetail = '';

        itemCardBtnDetail.onclick = () => {
            itemCardBtnDetail.classList.add('hidden');
            itemCardOrderingDetail.classList.add('show');
            inOrderCountDetail++;
            itemCardOrderingValueDetail.innerHTML = inOrderCountDetail;
            addPopupDetail.classList.add('show');
            if (typeof (timerPopupDetail) != 'undefined') {
                clearTimeout(timerPopupDetail);
            }

            timerPopupDetail = setTimeout(() => {
                addPopupDetail.classList.remove('show');
            }, 3000);
        }
        itemCardBtnfirstDetail.onclick = () => {
            errorPopupDetail.classList.add('show');
            if (typeof (timerErrorDetail) != 'undefined') {
                clearTimeout(timerErrorDetail);
            }

            timerErrorDetail = setTimeout(() => {
                errorPopupDetail.classList.remove('show');
            }, 3000);
        }
        itemCardOrderingMinusDetail.onclick = () => {
            inOrderCountDetail--;
            itemCardOrderingValueDetail.innerHTML = inOrderCountDetail;
            if (inOrderCountDetail < 1) {
                itemCardBtnDetail.classList.remove('hidden');
                itemCardOrderingDetail.classList.remove('show');
            }
        }
        itemCardOrderingPlusDetail.onclick = () => {
            inOrderCountDetail++;
            itemCardOrderingValueDetail.innerHTML = inOrderCountDetail;
        }
    }
}
let detailBtn = document.querySelector('.detail__btn');
let detailHiddenBtns = document.querySelector('.detail__hidden_btns');
let detailOrderingMinus = document.querySelector('.detail__ordering_minus');
let detailOrderingValue = document.querySelector('.detail__ordering_value');
let detailOrderingPlus = document.querySelector('.detail__ordering_plus');
let detailOrderCount = 0;
if (detailBtn) {
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
}
