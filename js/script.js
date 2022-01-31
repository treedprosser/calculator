let firstValue = null;
let secondValue = null;
let firstOperation = null;
let result = null;

const display = document.getElementById('display');
const numButtons = document.querySelectorAll("[data-number]");
const operatorButtons = document.querySelectorAll("[data-operator]");
const clearButton = document.querySelector("[data-clear]");
const equalsButton = document.querySelector("[data-equals]");

numButtons.forEach((button) =>
    button.addEventListener("click", () => 
        display.innerText += button.textContent)
);

operatorButtons.forEach((button) =>
    button.addEventListener("click", () => {
        if (result) {
            firstValue = result;
            result = null;
            firstOperation = button.textContent;
            updateDisplay();
        } else {
            firstOperation = button.textContent;
            firstValue = parseInt(display.textContent);
            updateDisplay();
        }
    })
);

equalsButton.addEventListener("click", () => {
    secondValue = parseInt(display.textContent);
    result = operate(firstOperation, firstValue, secondValue);
    updateDisplay();
})

clearButton.addEventListener("click", () => {
    firstValue = null;
    secondValue = null;
    firstOperation = null;
    result = null;
    display.textContent = "";
})

function updateDisplay() {
    display.innerText = result;
}

function operate(operator, num1, num2) {
    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            if (num2 === 0) {
                return 'ERROR';
            } else {
                return num1 / num2;
            }
    }
}