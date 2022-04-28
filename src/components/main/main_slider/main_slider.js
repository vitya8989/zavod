new Swiper('.main_slider', {
    speed: 700,
    slidesPerView: 1,
    loop: true,
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
