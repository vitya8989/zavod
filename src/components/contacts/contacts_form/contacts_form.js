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
}