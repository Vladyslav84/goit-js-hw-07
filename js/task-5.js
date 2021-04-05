const inputEl = document.querySelector('#name-input');

const greetingEl = document.querySelector('#name-output');

inputEl.addEventListener('input', (e) => {
    e.preventDefault;

    greetingEl.textContent = inputEl.value;

});
