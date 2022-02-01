// Напиши скрипт который: Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item.
const numberOfCategoriesRef = document.querySelectorAll(".item");
console.log(`Number of categories: ${numberOfCategoriesRef.length}`);


// Напиши скрипт который: Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега <h2>) и количество элементов в категории (всех вложенных в него <li>).
function lookingForListItems() {
    const itemsOfListRef = [...numberOfCategoriesRef].map(category => {
        const titleRef = category.firstElementChild.textContent
        const itemsRef = category.querySelectorAll('li')
        console.log(`Category: ${titleRef}`);
        console.log(`Elements: ${itemsRef.length}`);
    })
    return itemsOfListRef
}
lookingForListItems()