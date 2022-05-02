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
}