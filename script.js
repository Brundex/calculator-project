// Operation functions
function add(num1, num2) {
    return num1 + num2
}

function substract(num1, num2) {
    return num1 - num2
}

function multiply(num1, num2) {
    return num1 * num2
}

function divide(num1, num2) {
    return num1 / num2
}

function operate(operator, num1, num2) {
    console.log(operator(num1, num2))
}

// Populate display
const displayContent = [];

const display = document.getElementById('display');
const buttons = document.querySelectorAll('.button');

buttons.forEach(button => {
    button.addEventListener('click', populateDisplay);
});

function populateDisplay() {
    displayContent.push(this.innerHTML);
    display.textContent = displayContent.join("");
}

//