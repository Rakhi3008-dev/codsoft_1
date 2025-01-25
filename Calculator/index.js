let currentInput = '';
        let operation = null;
        let previousInput = '';

        function appendNumber(number) {
            currentInput += number;
            updateDisplay();
        }

        function setOperation(op) {
            if (currentInput === '') return;
            if (previousInput !== '') calculate();
            operation = op;
            previousInput = currentInput;
            currentInput = '';
        }

        function calculate() {
            if (operation === null || currentInput === '') return;
            const prev = parseFloat(previousInput);
            const curr = parseFloat(currentInput);
            if (isNaN(prev) || isNaN(curr)) return;

            let result;
            switch (operation) {
                case '+':
                    result = prev + curr;
                    break;
                case '-':
                    result = prev - curr;
                    break;
                case '*':
                    result = prev * curr;
                    break;
                case '/':
                    result = curr !== 0 ? prev / curr : 'Error';
                    break;
                default:
                    return;
            }

            currentInput = result;
            operation = null;
            previousInput = '';
            updateDisplay();
        }

        function clearDisplay() {
            currentInput = '';
            operation = null;
            previousInput = '';
            updateDisplay();
        }

        function updateDisplay() {
            document.getElementById('display').value = currentInput;
        }