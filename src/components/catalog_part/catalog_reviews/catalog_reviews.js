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
});