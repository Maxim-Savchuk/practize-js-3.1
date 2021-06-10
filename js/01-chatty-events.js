/*
 * Сhatty events
 * Приемы throttling и debouncing c Lodash
 */

/*
 * Mousemove и throttle
 */

const coordsOutputRef = document.querySelector('.js-coords');
let mouseMoveCbInvocationCounter = 0;

const throttledonMouseMove = _.throttle(onMouseMove, 500);

window.addEventListener('mousemove', throttledonMouseMove);

function onMouseMove(event) {
    mouseMoveCbInvocationCounter += 1;

    coordsOutputRef.textContent = `
    Количество вызовов onMouseMove: ${mouseMoveCbInvocationCounter},
    X: ${event.clientX},
    Y: ${event.clientY}
    `;
}

/*
 * Input и debounce
 */

const inputRef = document.querySelector('.js-input');
const outputRef = document.querySelector('.js-output');
let inputCbCbInvocationCounter = 0;

inputRef.addEventListener('input', _.debounce(onInputChange, 1000));

function onInputChange(event) {
    inputCbCbInvocationCounter += 1;

    outputRef.textContent = `
    Количество вызовов onInputChange: ${inputCbCbInvocationCounter},
    Значение: ${event.target.value}
    `;
}