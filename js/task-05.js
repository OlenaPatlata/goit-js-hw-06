// Задание 5
// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), подставляет его текущее значение в span#name-output. Если инпут пустой, в спане должна отображаться строка "Anonymous".

// Получили ссылки на элементы
const refs = {
    inputRef: document.querySelector('#name-input'),
    spanRef: document.querySelector('#name-output'),
}

// Объявили переменную с дефолтным значением для приветствия
let defoltValue = "Anonymous"

// Объявляем стрелочную функцию, результатом вызова которой есть замена дефолтного зачения приветствия после введения пользователем имени в input
const addText = () => !refs.inputRef.value.trim() ? refs.spanRef.textContent = defoltValue : refs.spanRef.textContent = refs.inputRef.value;

// Вешаем слушателя событий на input и в качестве колбека передаем стрелочную функцию
refs.inputRef.addEventListener('input', addText)

