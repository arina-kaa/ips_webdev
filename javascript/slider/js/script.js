document.addEventListener('DOMContentLoaded', () => {
    initSlider()
})

function initSlider() {
    const slidesToShow = 3
    const slidesToScroll = 2

    const container = document.querySelector('.slider__container')
    const track = document.querySelector('.slider__track')
    const items = document.querySelectorAll('.slider__item')
    const buttonPrev = document.querySelector('.slider-button__type_prev')
    const buttonNext = document.querySelector('.slider-button__type_next')

    let position = 0
    const itemWidth = container.clientWidth / slidesToShow
    const itemsCount = items.length
    const movePositionWidth = itemWidth * slidesToScroll
    items.forEach(item => {
        item.style.minWidth = `${itemWidth}px`
    })

    const setPosition = () => {
        track.style.transform = `translateX(${position}px)`
    }

    const checkButtons = () => {
        buttonPrev.disabled = position === 0
        buttonNext.disabled = position <= -(itemsCount - slidesToShow) * itemWidth
    }

    buttonPrev.addEventListener('click', () => {
        const unscrolledSlidesCount = Math.abs(position) / itemWidth
        position += unscrolledSlidesCount >= slidesToScroll
            ? movePositionWidth
            : unscrolledSlidesCount * itemWidth
        setPosition()
        checkButtons()
    })
    buttonNext.addEventListener('click', () => {
        const unscrolledSlidesCount = itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth
        position -= unscrolledSlidesCount >= slidesToScroll
            ? movePositionWidth
            : unscrolledSlidesCount * itemWidth
        setPosition()
        checkButtons()
    })

    checkButtons()
}