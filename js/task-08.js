// Задание 8
// Напиши скрипт управления формой логина.
// Обработка отправки формы form.login-form должна быть по событию submit.
// При отправке формы страница не должна перезагружаться.
// Если в форме есть незаполненные поля, выводи alert с предупреждением о том, что все поля должны быть заполнены.
// Если пользователь заполнил все поля и отправил форму, собери значения полей в обьект, где имя поля будет именем свойства, а значение поля - значением свойства. Для доступа к элементам формы используй свойство elements.
// Выведи обьект с введенными данными в консоль и очисти значения полей формы методом reset.

const refs = {
    formRef: document.querySelector('.login-form'),
}

const onSubmit = (event) => {
    event.preventDefault()
    const emailInputRef = refs.formRef.elements.email;
    const passwordInputRef = refs.formRef.elements.password;
    if (!emailInputRef.value || !passwordInputRef.value) {
        alert("Все поля должны быть заполнены!!");
        return;
    }
    const object = {};
    object[emailInputRef.name] = emailInputRef.value;
    object[passwordInputRef.name] = passwordInputRef.value;
    console.log(object);
    refs.formRef.reset();
}

// Добавляем слушателя на форму по событию submit
refs.formRef.addEventListener('submit', onSubmit);