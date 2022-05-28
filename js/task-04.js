const decBtnRef = document.querySelector('[data-action="decrement"]')
const incBtnRef = document.querySelector('[data-action="increment"]')
const valueRef = document.querySelector('#value')

let counterValue = 0;

const onDecrementValue = () => {
    counterValue -=1;
    valueRef.textContent = counterValue
}
const onIncrementValue = () => {
    counterValue +=1;
    valueRef.textContent = counterValue
}

decBtnRef.addEventListener('click', onDecrementValue)
incBtnRef.addEventListener('click', onIncrementValue)