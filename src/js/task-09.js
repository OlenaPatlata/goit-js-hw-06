// Задание 9
// Напиши скрипт, который изменяет цвета фона элемента <body> через инлайн стиль при клике на button.change-color и выводит значение цвета в span.color.

const btnRef = document.querySelector('.change-color')
const spanRef = document.querySelector('.color');

btnRef.addEventListener('click', changeColor)


function changeColor(event) {
  document.body.style.backgroundColor = `${getRandomHexColor()}`;
  spanRef.textContent=`${getRandomHexColor()}`
  
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
