document.addEventListener('DOMContentLoaded', () => {
    initPopup()
})

function initPopup() {
    const openPopupElements = document.querySelectorAll('.overlay, .popup');
    const visibleClass = 'visible'

    const popupLinks = document.querySelectorAll('.js-open-popup');
    popupLinks.forEach(popupLink => {
        popupLink.addEventListener('click', () => {
            openPopupElements.forEach(element => {
                element.classList.add(visibleClass);
            })
        });
    })

    const closePopupElements = document.querySelectorAll('.overlay, .close-button');
    closePopupElements.forEach(closePopupElement => {
        closePopupElement.addEventListener('click', () => {
            openPopupElements.forEach(element => {
                element.classList.remove(visibleClass);
            })
        });
    })
}