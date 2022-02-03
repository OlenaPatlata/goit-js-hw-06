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

// Отдельная функция для посчета количества букв введенных пользователем (после потери фокуса)
function onCountLetters() {
    if (refs.inputRef.value.length >= 6) {
        refs.inputRef.classList.add('valid')
        refs.inputRef.classList.remove('invalid')
    } else {
        refs.inputRef.classList.remove('valid')
        refs.inputRef.classList.add('invalid')
    }
}
