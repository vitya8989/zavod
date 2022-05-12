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

