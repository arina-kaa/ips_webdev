// Пример 1. Вывод в консоль
console.log('Welcome to console')

// Пример 2. Вывод переменной в консоль
let hello = 'Hello, world!'
console.log(hello)

hello = 'My name is Arina!'
console.log(hello)

// Пример 3. Операторы
let name = 'Arina'
let age = 25
let isProgrammer = true

// Пример 4. Операторы
let childAge = 15
let parentAge = 40

let summary = childAge + parentAge
let difference = parentAge - childAge
let parentIsOlder = parentAge > childAge
console.log(summary)
console.log(difference)
console.log(parentIsOlder)

// Пример 5. Конкатенация строк
let name = prompt('Как к вам обращаться?')
let message = 'Hello, ' + name + '! Welcome to our site.'
console.log(message)

// Пример 6. Создание объекта
let user = {
    name: 'John',
    age: 30,
    isProgrammer: true,
    'likes cats': true,
}
console.log(user)
console.log(user.name)
console.log(user.age)

// Пример 7. let и const
const name = 'John'
const age = 30
let isProgrammer = false
isProgrammer = true

// Пример 8. Условный оператор
const age = prompt('Ваш возраст?')
if (age < 18) {
    console.log('Ложись спать, завтра в школу!')
} else {
    console.log('Ты в полном расцвете сил!')
}

if (age < 18) {
    console.log('Ложись спать, завтра в школу!')
} else if (age < 40) {
    console.log('Ты в полном расцвете сил!')
} else {
    console.log('Сейчас бы на пенсию!')
}

// Пример 9. Меняем свойства элемента
const title = document.querySelector('h1')
console.log(title.style.color)

title.style.color = '#000000'
console.log(title.style.color)

// Пример 10. Замена изображения в фоне
const userAge = prompt('Ваш возраст?')
const topBlock = document.querySelector('#topBlock')
let className = 'university'
if (userAge < 25) {
    className = 'programming'
} else if (userAge < 35) {
    className = 'conference'
}
topBlock.classList.add(className)

// Пример 11. Меняем свойства элемента
const title = document.querySelector('h1')
console.log(title.innerText)
console.log(title.innerHTML)

title.innerText = 'Этот <em>текст</em> вставлен скриптом'
console.log(title.innerText)
console.log(title.innerHTML)

title.innerHTML = 'Этот <em>текст</em> вставлен скриптом'
console.log(title.innerText)
console.log(title.innerHTML)

// Пример 12. Меняем атрибуты элемента
const button = document.querySelector('#findNumberButton')
button.setAttribute('disabled', true)

const menuLinks = document.querySelectorAll('.navigation__link')
Array.from(menuLinks)[0].setAttribute('href', 'https://www.institutps.ru/')


// Пример 13. Написание функции
function sayHello() {
    console.log('Hello!')
}

sayHello()
sayHello()
sayHello()

// Пример 14. Написание функции с возвращаемым значением
const MAX_LENGTH = 255

function trimString(rawString) {
    if (rawString.lenght < MAX_LENGTH) {
        return rawString
    }

    let trimmedString = rawString.substring(0, MAX_LENGTH)
    return trimString + '...'
}

console.log(trimString('Hello, world!'))
console.log(trimString('Hello! I am very long string and I am ready to be trimmed!'))


// Пример 15. Реакция на клик пользователя
const buttonEveryClick = document.querySelector('#findNumberButton')
buttonEveryClick.addEventListener('click', showFindNumberMessageEveryClick)

function showFindNumberMessageEveryClick() {
    console.log('Want some numbers?')
}

// Пример 16. Реакция на первый клик
const buttonFirstClick = document.querySelector('#findNumberButton')
buttonFirstClick.addEventListener('click', showFindNumberMessageFirstClick)

function showFindNumberMessageFirstClick() {
    console.log('Want some numbers?')
    buttonFirstClick.removeEventListener('click', showFindNumberMessageFirstClick)
}

// Пример 17. Реакция на каждый клик
const listItems = document.querySelectorAll('.js-list-item')
console.log(listItems)
listItems.forEach(item => item.addEventListener('click', (event) => {
    console.log(event)
    event.target.classList.add('active')
}))