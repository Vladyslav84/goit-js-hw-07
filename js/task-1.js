const categoriesEl = document.querySelector('#categories');

const itemLehgth = categories.children.length;

function getItems(itemLehgth) {
  return `В списке ${itemLehgth} категории.`
}

getItems(itemLehgth);

console.log(getItems(itemLehgth));

const itemsEl = document.querySelector('h2');

const catChl = categories.children;

const getCategories = [...catChl].map(element => {
  const title = element.querySelector('h2').textContent;

  const list = element.querySelector('ul').children.length;

  return `Категория: ${title} 
    Количество элементов: ${list};
    `
});

console.log(getCategories.join(' '));


