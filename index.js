
let text = document.getElementById('demo');
let button =document.getElementById('btn');
let input = document.getElementById('input');
let valueInput;
const handleKeyUp = () => {
    valueInput = input.value
    text.innerHTML = valueInput
}
input.addEventListener('keyup', handleKeyUp)
const refresh = () => {
    text.innerHTML = '';
}
button.addEventListener('click', refresh)
