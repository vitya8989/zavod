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
// аккордеоны фильтра

$('.filter__item_title_wr').next().slideUp();

$('.filter__item_title_wr').each(function() {
    if ($( this ).next().hasClass('opened')) {
        $( this ).next().slideDown();
    }
});

$('.filter__item_title_wr').click(function() {
    $(this).next().slideToggle().toggleClass("opened");
    $(this).find('.filter__item_arrow').toggleClass("rotate");
    filterFloatButton.classList.add('this--hidden');
});

// высплывабщая кнопка фильтра и нижние кнопки

let catalogMobileFilterBtnCount = document.querySelector('.catalog__mobile_filter_btn_count');
let filter = document.querySelector('.filter');
let filterBody = document.querySelector('.filter__body');
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
           if(typeof(timer) != 'undefined') {
               clearTimeout(timer);
           }

           timer = setTimeout(() => {
               filterFloatButton.classList.add('this--hidden');
           }, 10000);

           activeCheckboxes++;
       } else {
           activeCheckboxes--;
       }
       if (activeCheckboxes >= 1 && !filterBtnsWr.classList.contains('show'))  {
           filterBtnsWr.classList.add('show');
           filterBody.classList.add('this--big_pb');
           catalogMobileFilterBtnCount.textContent = activeCheckboxes + 1;
       } else if (activeCheckboxes === 0) {
           filterBtnsWr.classList.remove('show');
           filterBody.classList.remove('this--big_pb');
           catalogMobileFilterBtnCount.classList.remove('show');
           filterFloatButton.classList.add('this--hidden');
       }
        if (activeCheckboxes >= 1) {
            catalogMobileFilterBtnCount.classList.add('show');
            catalogMobileFilterBtnCount.textContent = activeCheckboxes;
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
        if(typeof(timer) != 'undefined') {
            clearTimeout(timer);
        }

        timer = setTimeout(() => {
            filterFloatButton.classList.add('this--hidden');
        }, 10000);
        if (!filterPriceInputFlag) {
            activeCheckboxes++;
            catalogMobileFilterBtnCount.textContent = activeCheckboxes;
            catalogMobileFilterBtnCount.classList.add('show');
            filterPriceInputFlag = true;
        }
        filterBtnsWr.classList.add('show');
        filterBody.classList.add('this--big_pb');
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
    stop: function(event, ui) {
        $("input#minCost").val($('#price_slider').slider("values",0));
        $("input#maxCost").val($('#price_slider').slider("values",1));
        let topOfFloatButton = $('#price_slider')[0].offsetTop - 27;
        filterFloatButton.style.top = `${topOfFloatButton}px`;
        filterFloatButton.classList.remove('this--hidden');
        if(typeof(timer) != 'undefined') {
            clearTimeout(timer);
        }

        timer = setTimeout(() => {
            filterFloatButton.classList.add('this--hidden');
        }, 10000);
        if (!filterPriceInputFlag) {
            activeCheckboxes++;
            catalogMobileFilterBtnCount.textContent = activeCheckboxes;
            catalogMobileFilterBtnCount.classList.add('show');
            filterPriceInputFlag = true;
        }
        filterBtnsWr.classList.add('show');
        filterBody.classList.add('this--big_pb');
    },
    slide: function(event, ui){
        $("input#minCost").val($('#price_slider').slider("values",0));
        $("input#maxCost").val($('#price_slider').slider("values",1));
    }
})

$("input#minCost").change(function(){
    var value1=$("input#minCost").val();
    var value2=$("input#maxCost").val();
    if(parseInt(value1) > parseInt(value2)){
        value1 = value2;
        $("input#minCost").val(value1);
    }
    $('#price_slider').slider("values",0,value1);
});
$("input#maxCost").change(function(){
    var value1=$("input#minCost").val();
    var value2=$("input#maxCost").val();
    if (value2 > 1000000) { value2 = 1000000; $("input#maxCost").val(1000000)}
    if(parseInt(value1) > parseInt(value2)){
        value2 = value1;
        $("input#maxCost").val(value2);
    }
    $('#price_slider').slider("values",1,value2);
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
    filterBody.classList.remove('this--big_pb');
    activeCheckboxes = 0;
    catalogMobileFilterBtnCount.textContent = activeCheckboxes;
    catalogMobileFilterBtnCount.classList.remove('show');
}
// открытие/закрытие мобильного фильтра

let catalogMobileFilterBtn = document.querySelector('.catalog__mobile_filter_btn');
let filterCloseBtn = document.querySelector('.filter__close_btn');

catalogMobileFilterBtn.onclick = () => {
    filter.classList.add('filter_open');
}


filterCloseBtn.onclick = () => {
    filter.classList.remove('filter_open');
};
// показать/скрыть сортировку

let catalogSortBtn = document.querySelector('.catalog__sort_btn ');
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

// кнопки категорий

let catalogCategory = document.querySelectorAll('.catalog__category');

for (let  i = 0; i < catalogCategory.length; i++) {
    catalogCategory[i].onclick = () => {
        catalogCategory[i].classList.toggle('active');
    }
}
;