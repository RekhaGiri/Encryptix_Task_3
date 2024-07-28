// let display = document.getElementById('display');
// let currentInput = '';
// let previousInput = '';
// let operator = null;

// function clearDisplay() {
//     currentInput = '';
//     previousInput = '';
//     operator = null;
//     display.innerText = '0';
// }

// function deleteLast() {
//     currentInput = currentInput.toString().slice(0, -1);
//     display.innerText = currentInput || '0';
// }

// function appendNumber(number) {
//     if (number === 0 && currentInput === '0') return;
//     currentInput += number;
//     display.innerText = currentInput;
// }

// function appendOperator(op) {
//     if (currentInput === '') return;
//     if (operator !== null) calculate();
//     previousInput = currentInput;
//     currentInput = '';
//     operator = op;
//     display.innerText = previousInput + ' ' + operator;
// }

// function appendDot() {
//     if (currentInput.includes('.')) return;
//     currentInput += '.';
//     display.innerText = currentInput;
// }

// function calculate() {
//     let result;
//     const prev = parseFloat(previousInput);
//     const current = parseFloat(currentInput);
//     if (isNaN(prev) || isNaN(current)) return;
//     switch (operator) {
//         case '+':
//             result = prev + current;
//             break;
//         case '-':
//             result = prev - current;
//             break;
//         case '*':
//             result = prev * current;
//             break;
//         case '/':
//             result = prev / current;
//             break;
//         default:
//             return;
//     }
//     currentInput = result;
//     operator = null;
//     previousInput = '';
//     display.innerText = result;
// }

let display = document.getElementById('display');
let currentInput = '';
let expression = '';

function clearDisplay() {
    currentInput = '';
    expression = '';
    display.innerText = '0';
}

function deleteLast() {
    currentInput = currentInput.toString().slice(0, -1);
    expression = expression.toString().slice(0, -1);
    display.innerText = expression || '0';
}

function appendNumber(number) {
    if (number === 0 && currentInput === '0') return;
    currentInput += number;
    expression += number;
    display.innerText = expression;
}

function appendOperator(op) {
    if (currentInput === '' && expression === '') return;
    currentInput = '';
    expression += ' ' + op + ' ';
    display.innerText = expression;
}

function appendDot() {
    if (currentInput.includes('.')) return;
    currentInput += '.';
    expression += '.';
    display.innerText = expression;
}

function calculate() {
    try {
        let result = eval(expression.replace(/×/g, '*').replace(/÷/g, '/'));
        display.innerText = result;
        expression = result;
        currentInput = result;
    } catch {
        display.innerText = 'Error';
        expression = '';
        currentInput = '';
    }
}
