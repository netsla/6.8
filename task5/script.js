// Определяем переменную поля ввода формы
let input = document.querySelector('input');
//Определяем переменную кнопку отправки формы
let button = document.querySelector('button');
//Определяем переменную текста дублирующего значение поля ввода формы
let duplicateField = document.querySelector('#duplicateField');

input.addEventListener('input', (event) => {
    event.preventDefault();
    duplicateField.textContent = input.value;
});

button.addEventListener('click', (event) => {
    console.log(input.value);
    input.value = '';
    duplicateField.textContent = '';
});