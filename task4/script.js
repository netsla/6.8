const userTextField = document.querySelector('a');
userTextField.addEventListener('click', function(event) {
const userText = prompt('Введите текст: ');
userTextField.textContent = userText;
console.log('Демонстрация пользовательского текста: ', userText);
});
// userTextField.preventDefault()

const userTextField1 = document.querySelector('a');
userTextField1.addEventListener('click', function(event) {
    this.textContent = 'Изменений в тексте больше не будет';
    event.preventDefault();
})


