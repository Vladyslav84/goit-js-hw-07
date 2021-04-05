const counterEl = document.querySelector('#counter');
const buttonDecrement = document.querySelector('.decrement');
const buttonIncrement = document.querySelector('.increment');
const value = document.querySelector('#value');
let counterValues = 0;

buttonDecrement.addEventListener('click', () => {

});

buttonDecrement.addEventListener('click', () => {
    value.textContent = counterValues -= 1;
});

buttonIncrement.addEventListener('click', onbuttonIncrementClick);

function onbuttonIncrementClick() {
    value.textContent = counterValues += 1;
};
