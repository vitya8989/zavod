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
