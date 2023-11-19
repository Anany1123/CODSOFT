let currentInput = '';

function clearDisplay() {
    currentInput = '';
    document.getElementById('display').value = '';
}

function appendToDisplay(value) {
    currentInput += value;
    document.getElementById('display').value = currentInput;
}

function calculateResult() {
    try {
        const result = eval(currentInput);
        document.getElementById('display').value = result;
        currentInput = result.toString(); // Set result as the current input for further calculations
    } catch (error) {
        document.getElementById('display').value = 'Error';
        currentInput = ''; // Reset current input on error
    }
}
