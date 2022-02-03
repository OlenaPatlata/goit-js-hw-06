// Напиши скрипт, который для каждого элемента массива ingredients:
// Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
// Добавит название ингредиента как его текстовое содержимое.
// Добавит элементу класс item.
// После чего вставит все <li> за одну операцию в список ul.ingredients.


const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const parentListRef = document.querySelector('#ingredients');

function iteratesList() {
  const markup = ingredients.map(itemArray => {
    const liRef = document.createElement('li');
    liRef.textContent = itemArray
    liRef.classList.add("item")
    console.log(liRef);
    return liRef
  });
  parentListRef.append(...markup);
      
}
iteratesList();