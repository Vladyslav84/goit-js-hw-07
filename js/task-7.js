const inputEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

inputEl.addEventListener('input', (e) => {
    e.preventDefault;
    textEl.style.fontSize = inputEl.value + 'px';
});
