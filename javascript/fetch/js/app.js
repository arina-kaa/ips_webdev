// Асинхроннавя отправка формы
document.addEventListener("submit", (e) => {
    // Отменяем стандартное поведение отправки формы
    e.preventDefault();

    const form = e.target;
    fetch(form.action, {
        method: form.method,
        body: new FormData(form),
    })
        .then(response => response.json())
        .then(result => {
            if (result === 1) {
                form.parentNode.querySelector('[data-result="success"]').classList.add('visible')
            }
            else {
                // Отображение ошибки
                form.parentNode.querySelector('[data-result="error"]').classList.add('visible')
            }
        })
        .catch(err => {
            // Отображение ошибки
        });

    // Дизаблим все поля формы
    Array.from(form.elements).forEach(field => field.disabled = true);
});
