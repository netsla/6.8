// Задание task2: 
// Создание обработчика события — клик и отоображение alert c текстом описания метода
const consoleLog = document.querySelector('#consoleLog');
consoleLog.addEventListener('click', () => {
    console.log('Метод вывода сообщения в веб-консоль');
    alert('Метод вывода сообщения в веб-консоль');
});

//Замена фразы "Пример console.log" на странице на фразу "Пример использования команды console.log"
document.querySelector('#consoleCode').addEventListener('click', 
    function() {
      this.textContent = 'Пример использования команды console.log';
});

//Команда Alert() - Обработчик клик с выводом метода к консоль, alert и замена надписи на странице 
const change3 = document.querySelector('#alert');
change3.addEventListener('click', () => {
    console.log('Пример использования команды Alert');
    alert('Пример использования команды Alert');
    const element = document.querySelector('#alert');
    element.textContent = 'Пример использования команды Alert';
});

const change5 = document.querySelector('#alertCode');
change5.addEventListener('click', () => {
    console.log('Пример использования команды Alert');
    alert('Внутри тебя живут ответы,\nКак и вопросы все в тебе.\nЗахочешь если вдруг совета,\nТы сердце слушай в тишине.');    
});

// Команда Promt() - Ввод пользовательского текста и замена на странице
const userTextField = document.querySelector('#prompt');
userTextField.addEventListener('click', () => {
const userText = prompt('Введите текст: ');
userTextField.textContent = userText;
console.log('Демонстрация пользовательского текста: ', userText);
});

// Команда Promt() - Пример: Проверка на чётность
let promptCode = document.querySelector('#promptCode');
promptCode.addEventListener('click', () => {
const promptCode = prompt('Введите чётное число', '')
if (promptCode % 2 === 0) {
  alert('Число чётное')
} else {
  alert('Число нечётное')
}
});