const display = document.getElementById('display');

function appendNumber(num) {
    display.value += num;
}

function appendOperator(op) {
    const lastChar = display.value.slice(-1);
    if ("+-*/".includes(lastChar)) {
        display.value = display.value.slice(0, -1) + op;
    } else {
        display.value += op;
    }
}

function clearDisplay() {
    display.value = '';
}

function calculate() {
    try {
        const result = eval(display.value);
        display.value = result;
    } catch (e) {
        display.value = 'Error';
    }
}