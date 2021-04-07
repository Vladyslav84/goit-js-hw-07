const inputEl = document.querySelector('#name-input');

const greetingEl = document.querySelector('#name-output');

let greetingText = greetingEl.textContent;

inputEl.addEventListener('input', (e) => {
    e.preventDefault();

    if (greetingEl.textContent = inputEl.value)
    {
        greetingEl.textContent = inputEl.value;
    } else
    {
        greetingEl.textContent = greetingText;

    }

});
