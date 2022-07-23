const CALC_WIDTH = 18;
const ROUND = 10000;
const display = document.getElementById('display');
const buttons = document.querySelectorAll('.button');
const clear = document.getElementById('clear');
const equal = document.getElementById('equal');

let inputA = "";
let inputB = "";
let operator = "";
let displayArr = [];


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
        addToDisplay(this.innerHTML, displayArr);
    }
    else if (this.className === 'button operator') {
        if (operator === "" && displayArr.length > 0) {
            addToDisplay(this.innerHTML, displayArr);
            saveInputAndOperator(this);
            return
        } else { 
            return
         }
    }
    else if (this.id === 'float') {
        if (operator==="" && !inputA.includes(".")) {
            inputA+=".";
            addToDisplay(this.innerHTML, displayArr);
        }
        else if (operator !== "" && !inputB.includes(".")) {
            inputB+=".";
            addToDisplay(this.innerHTML, displayArr);
        }    
    }

    console.log("Display is showing:")
    console.log(displayArr);
}

function addToDisplay(element, inputArr) {
    if (displayArr.length >= CALC_WIDTH){
        alert("Error");
        clearCalc();
        return
    }
    inputArr.push(element);
    display.textContent = inputArr.join("");
}

function saveInputAndOperator(element) {
    inputA = displayArr.slice(0, -1).join("");
    operator = element.id;
    console.log(inputA)
    
    floatActive = false;
}


equal.addEventListener('click', getResult);

function getResult() {
    if (inputA === "" || !operator) {
        display.textContent = inputA;
        return
    }
    if (!inputB) {
        display.textContent = inputA;
        operator = "";
        displayArr.pop();
        return
    }
    result = operate(operator, Number(inputA), Number(inputB)).toString();
    displayArr.length = 0;
    [...result].forEach(letter => displayArr.push(letter));
    display.textContent = displayArr.join("");

    inputA = displayArr.join("");
    inputB = "";
    operator = "";
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
            if (Number(num2) === 0) {
                alert("Error");
                clearCalc();
                return
            }
            return Math.round(divide(num1, num2) * ROUND) / ROUND;
    }
}
