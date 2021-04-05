const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
];

const ingredientsEl = document.querySelector('#ingredients');

const ingredientsPotatos = document.createElement('li');

const ingredientsMushrooms = document.createElement('li');

const ingredientsGarlic = document.createElement('li');

const ingredientsTomatos = document.createElement('li');

const ingredientsParsley = document.createElement('li');

const ingredientsSpices = document.createElement('li');


const arrIngredients = [
    ingredientsPotatos,
    ingredientsMushrooms,
    ingredientsGarlic,
    ingredientsTomatos,
    ingredientsParsley,
    ingredientsSpices];


const getIngredientsItems = ingredients.forEach((element, ind) =>

    arrIngredients[ind].textContent = element,

);

ingredientsEl.append(
    ingredientsPotatos,
    ingredientsMushrooms,
    ingredientsGarlic,
    ingredientsTomatos,
    ingredientsParsley,
    ingredientsSpices)


console.log(ingredientsEl);

