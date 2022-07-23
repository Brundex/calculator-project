const display = document.getElementById('display');
const buttons = document.querySelectorAll('.button');
const clear = document.getElementById('clear');

let inputA = "";
let inputB = "";
let operator = "";
let displayArr = [];
let floatActive = false;


buttons.forEach(button => {
    button.addEventListener('click', populateDisplay);
});

// If element meets all conditions it will be displayed
function populateDisplay() {
    if (this.className === 'digit button') {
        if(operator === "") {
            inputA += this.id;
            console.log("input A is:");
            console.log(inputA);
        }
        else {
            inputB += this.id;
            console.log("inputB is:");
            console.log(inputB);
        }
        addToDisplay(this, displayArr);
    }
    else if (this.className === 'button operator') {
        if (operator === "") {
            addToDisplay(this, displayArr);
            saveInputAndOperator(this);
            return
        } else { 
            return
         }
    }

    console.log("Display is showing:")
    console.log(displayArr);
}

function addToDisplay(element, inputArr) {
    inputArr.push(element.innerHTML);
    display.textContent = inputArr.join("");
}

function saveInputAndOperator(element) {
    inputA = firstFactor = displayArr.slice(0, -1);
    operator = element.innerHTML;
    console.log(inputA)
    
    floatActive = false;
}



clear.addEventListener('click', clearCalc);

function clearCalc() {
    displayArr = [];
    display.textContent = "";
    operator = "";
    inputA = "";
    inputB = "";
}


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

function operate(mathOperator, num1, num2) {
    switch (mathOperator) {
        case "add":
            return Math.round(add(num1, num2) * 100000) / 100000;
        case "substract":
                return Math.round(substract(num1, num2) * 100000) / 100000;
        case "multiply":
            return Math.round(multiply(num1, num2) * 100000) / 100000;
        case "divide":
            if (Number(num2) === 0) {alert("Error");}
            return Math.round(divide(num1, num2) * 100000) / 100000;
    }
}
