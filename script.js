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
    // Allows to replace the operator if misclicked
    if (this.className === 'button operator' && (displayContent.includes('+') ||
        displayContent.includes('-') ||
        displayContent.includes('/') ||
        displayContent.includes('x'))) {
        //
        displayContent[displayContent.length - 1] = this.innerHTML;
        display.textContent = displayContent.join("");
        console.log(displayContent);
        operatorIndex = displayContent.indexOf(displayContent[displayContent.length - 1]);
        console.log(operatorIndex);
        operator = displayContent[operatorIndex];
        console.log(operator);
        return

    }
    // Only will display numbers, or operators after numbers
    else if (this.className === 'digit button' || displayContent.length > 0) {
        //save operation that is being used
        displayContent.push(this.innerHTML);
        display.textContent = displayContent.join("");
        console.log(displayContent);

        // save first factor of the operation when an operator button is hit
        if (this.className === 'button operator') {
            window.firstFactor = displayContent.slice(0, -1).join("");
            console.log(`firstFactor: ${firstFactor}`);
            window.operatorIndex = displayContent.indexOf(displayContent[displayContent.length - 1]);
            console.log(operatorIndex);
            const operator = displayContent[operatorIndex];
            console.log(operator);
        }
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