window.onload = () => {
    initScrollTop();
    initSmoothNavigation();
    initPopup();
}

// Плавный скролл в начало страницы
function initScrollTop() {
    const button = document.querySelector('#buttonUp');
    button.addEventListener('click', scrollToStart);

    // Плавное появление кнопки
    window.addEventListener('scroll', (event) => {
        const button = document.querySelector('#buttonUp');
        const topOffset = 400;
        if (window.pageYOffset > topOffset) {
            button.classList.add('visible');
        } else {
            button.classList.remove('visible');
        }
    });
}

function scrollToStart(event) {
    event.preventDefault();
    window.scroll({
        left: 0,
        top: 0,
        behavior: 'smooth',
    })
}

// Плавная навигация
function initSmoothNavigation() {
    // const smoothLinks = document.querySelectorAll('a[href^="#"]');
    const smoothLinks = document.querySelectorAll('.js-menu-item');
    smoothLinks.forEach(smoothLink => {
        smoothLink.addEventListener('click', (event) => {
            event.preventDefault();
            const id = smoothLink.getAttribute('href');

            document.querySelector(id).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    })
}

// Попап
function initPopup() {
    const openPopupElements = document.querySelectorAll('.overlay, .popup');
    const popupLinks = document.querySelectorAll('a.js-open-popup');
    popupLinks.forEach(popupLink => {
        popupLink.addEventListener('click', (event) => {
            event.preventDefault();
            openPopupElements.forEach(element => {
                element.classList.add('visible');
            })
        });
    })

    const closePopupElements = document.querySelectorAll('.overlay, .close-button');
    closePopupElements.forEach(closePopupElement => {
        closePopupElement.addEventListener('click', (event) => {
            event.preventDefault();
            openPopupElements.forEach(element => {
                element.classList.remove('visible');
            })
        });
    })
}

// Асинхроннавя отправка формы
document.addEventListener("submit", (e) => {
    // Отменяем стандартное поведение отправки формы
    e.preventDefault();

    const form = e.target;
    fetch(form.action, {
        method: form.method,
        body: new FormData(form),
    })
        .then((res) => {
            // Обработка результата
        })
        .catch((err) => {
            // Отображение ошибки
        });

    // Дизаблим все поля формы
    Array.from(form.elements).forEach((field) => (field.disabled = true));
});