```
const displayElement = document.getElementById("display");

function appendToDisplay(value) {
    displayElement.value += value;
}

function clearDisplay() {
    displayElement.value = "";
}

function deleteLast() {
    displayElement.value = displayElement.value.slice(0, -1);
}

function calculate() {
    try {
        displayElement.value = eval(displayElement.value);
    } catch (e) {
        displayElement.value = "Error";
    }
}

function calculateSquareRoot() {
    const value = parseFloat(displayElement.value);
    if (!isNaN(value)) {
        displayElement.value = Math.sqrt(value);
    } else {
        displayElement.value = "Error";
    }
}

function calculatePercentage() {
    const value = parseFloat(displayElement.value);
    if (!isNaN(value)) {
        displayElement.value = value / 100;
    } else {
        displayElement.value = "Error";
    }
}

function appendPower() {
    displayElement.value += "**"; 
}
```