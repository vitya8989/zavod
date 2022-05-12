@@include('../components/header/header.js');
@@include('../components/main/main_slider/main_slider.js');
@@include('../components/contacts/contacts_map/contacts_map.js');
@@include('../components/contacts/contacts_form/contacts_form.js');
@@include('../components/catalog_part/catalog_part_filter/catalog_part_filter.js');
@@include('../components/catalog_part/catalog_part_body/catalog_part_body.js');
@@include('../components/catalog_part/catalog_reviews/catalog_reviews.js');

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
