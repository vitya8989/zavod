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
}