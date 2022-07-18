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
    // If there are no numbers yet, operators should not be used
    if (this.className === 'button operator' && (displayContent.includes('+') ||
        displayContent.includes('-') ||
        displayContent.includes('/') ||
        displayContent.includes('x'))) {
        return
    }
    // Only will display numbers, or operators after numbers
    else if (this.className === 'digit button' || displayContent.length > 0) {
        //save operation that is being used
        if (this.className === 'button operator') {
            window.currentOperation = this.id;
            window.index = displayContent.length;
        }
        displayContent.push(this.innerHTML);
        display.textContent = displayContent.join("");
        console.log(displayContent);
    }
}

// Use operate function when pressing "="
const equal = document.getElementById('equal');

// function equalBehavior {
//     if (!displayContent.length) 
//     const firstFactor = displayContent.slice(0, index); 
// }
// const firstFactor = displayContent.slice(0, index);
// console.log(firstFactor);
// const secondFactor = 10;
// Condiciones para que funcione el equal:
// si no hay nada, display muestra 0
// si solo hay numero, sin index 
// equal.addEventListener('click', operate(currentOperation, firstFactor, secondFactor))   