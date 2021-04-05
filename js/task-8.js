
const divUl = document.querySelector('#boxes');
const btnCreate = document.querySelector('[data-action="render"]');
const btnDelete = document.querySelector('[data-action="destroy"]');
const inputBtnEl = document.querySelector('.inputBtn');
let width = 30;
let height = 30;

inputBtnEl.addEventListener('input', e => {
    e.preventDefault;

})

const createBoxes = amount => {
    amount = inputBtnEl.value;
    for (let i = 0; i < amount; i += 1)
    {
        const divEl = document.createElement('div');
        divEl.style.width = width + 10 * i + 'px';
        divEl.style.height = height + 10 * i + 'px';
        divEl.style.backgroundColor = `rgb(${ getRandom(0, 255) }, ${ getRandom(0, 255) }, ${ getRandom(0, 255) })`;
        divUl.append(divEl);
    };

};
function getRandom(min, max) {
    return Math.ceil(Math.random() * (max - min) + min)
};
btnCreate.addEventListener('click', createBoxes);
const removeBoxes = () => {
    divUl.innerHTML = "";
    inputBtnEl.value = '';
};
btnDelete.addEventListener('click', removeBoxes);