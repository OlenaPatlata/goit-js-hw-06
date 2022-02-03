// Задание 6
// Напиши скрипт, который при потере фокуса на инпуте (событие blur), проверяет его содержимое на правильное количество введённых символов.
// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество символов, то border инпута становится зелёным, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid, которые мы уже добавили в исходные файлы задания.

// Получаем ссылкe на элемент
const refs = {
    inputRef: document.querySelector("#validation-input"),
}

// Добавляем слушателя событий на input
refs.inputRef.addEventListener('blur', onCountLetters);

// Отдельная функция для посчета количества букв введенных пользователем (после потери фокуса) и добавления/удаления класса
function onCountLetters() {
    if (Number(refs.inputRef.dataset.length) === refs.inputRef.value.length) {
        replaceClasses('valid', 'invalid');
        return;
    } 
        replaceClasses('invalid', 'valid');
}
// Отдельная функция для добавления/удаления класса
const replaceClasses = (classToAdd, classToRemove) => {
        refs.inputRef.classList.remove(classToRemove)
    refs.inputRef.classList.add(classToAdd)
}
