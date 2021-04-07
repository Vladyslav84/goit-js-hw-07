const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', (e) => {
    e.preventDefault;

    if (inputEl.value.length < inputEl.dataset.length || inputEl.value.length > inputEl.dataset.length)
    {

        inputEl.classList.add('invalid');

    } else
    {
        inputEl.classList.remove('invalid');
        inputEl.classList.add('valid');
    }

});