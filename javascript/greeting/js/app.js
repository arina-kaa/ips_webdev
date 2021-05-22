// Пример 1. Вывод в консоль
console.log('Welcome to console');

// Пример 2. Вывод переменной в консоль
var hello = 'Hello, world!';
console.log(hello);

// Пример 3. Операторы
var childAge = 15;
var parentAge = 40;

var summary = childAge + parentAge;
var difference = parentAge - childAge;
var parentIsOlder = parentAge > childAge;
console.log(summary);
console.log(difference);
console.log(parentIsOlder);

// Пример 4. Конкатенация строк
var name = prompt('Как к вам обращаться?');
var message = 'Hello, ' + name + '! Welcome to our site.';
console.log(message);

// Пример 5. Создание объекта
var user = {
    name: 'John',
    age: 30,
    'likes birds': true,
}
console.log(user);
console.log(user.name);
console.log(user.age);

// Пример 6. Условный оператор
var age = prompt('Ваш возраст?');
if (age < 18) {
    console.log('Ложись спать, завтра в школу!');
} else {
    console.log('Ты в полном расцвете сил!');
}

if (age < 18) {
    console.log('Ложись спать, завтра в школу!');
} else if (age < 40) {
    console.log('Ты в полном расцвете сил!');
} else {
    console.log('Сейчас бы на пенсию!');
}

// Пример 7. Замена изображения в фоне
const userAge = prompt('Ваш возраст?');
const topBlock = document.querySelector('#topBlock');
let className = 'university';
if (userAge < 25) {
    className = 'programming';
} else if (userAge < 35) {
    className = 'conference';
}
topBlock.classList.add(className);

// Пример 8. Написание функции
function sayHello() {
    console.log('Hello!');
}

sayHello();
sayHello();
sayHello();

// Пример 9. Реакция на клик пользователя
const buttonEveryClick = document.querySelector('#findNumberButton');
buttonEveryClick.addEventListener('click', showFindNumberMessageEveryClick);

function showFindNumberMessageEveryClick() {
    console.log('Want some numbers?');
}

const buttonEvent = document.querySelector('#findNumberButton');
buttonEvent.addEventListener('click', showFindNumberMessageEvent);

function showFindNumberMessageEvent(event) {
    console.log(event);
}

// Пример 10. Реакция на первый клик
const buttonFirstClick = document.querySelector('#findNumberButton');
buttonFirstClick.addEventListener('click', showFindNumberMessageFirstClick);

function showFindNumberMessageFirstClick() {
    console.log('Want some numbers?');
    buttonFirstClick.removeEventListener('click', showFindNumberMessageFirstClick);
}

// Пример 11. Реакция на каждый клик
const listItems = document.querySelectorAll('.js-list-item');
console.log(listItems);
listItems.forEach(item => item.addEventListener('click', (event) => {
    console.log(event);
    event.target.classList.add('active');
}))
