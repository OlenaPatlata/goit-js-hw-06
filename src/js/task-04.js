// Задание 4
// Счетчик состоит из спана и кнопок, которые, при клике, должны увеличивать и уменьшать его значение на единицу.
// Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.

// Получаем ссылки на элементы
const refs = {
    btnDecrementRef: document.querySelector('[data-action="decrement"]'),
    btnIncrementRef: document.querySelector('[data-action="increment"]'),
    valueRef: document.querySelector('#value'),
}
// Вводим переменную для хранения значений
let counterValue = 0;

// Основная функция, которая вешвет слушателей событий наобе кнопки и в качестве колбеков запускает  дополнительные функиции
function bindEvents() {
    refs.btnDecrementRef.addEventListener('click', () => { decrement(); updateValue() })
    refs.btnIncrementRef.addEventListener('click', () => { increment(); updateValue() })
}

// функция,которая увеличивает значение переменной для хранения значений
function increment() {
    counterValue += 1;
}

// функция,которая уменьшает значение переменной для хранения значений
function decrement() {
    counterValue -= 1;
}

// функция,которая меняет текстовое значение в span  на обновленное значение переменной для хранения значений
function updateValue() {
    refs.valueRef.textContent = counterValue;
}
// вызываем основную функцию
bindEvents()
