document.addEventListener('DOMContentLoaded', function() {
    const display = document.getElementById('display');
    const keys = document.querySelector('.calculator-keys');

    keys.addEventListener('click', function(event) {
        if (!event.target.matches('button')) return;

        const key = event.target;
        const keyValue = key.value;
        const displayValue = display.value;

        if (key.classList.contains('all-clear')) {
            display.value = '0';
        } else if (key.classList.contains('delete-key')) {
            display.value = displayValue.slice(0, -1) || '0';
        } else if (key.classList.contains('operator')) {
            if (displayValue === '0') {
                display.value = keyValue;
            } else {
                display.value += keyValue;
            }
        } else if (key.classList.contains('decimal')) {
            if (!displayValue.includes('.')) {
                display.value += keyValue;
            }
        } else if (key.classList.contains('equal-sign')) {
            try {
                display.value = eval(displayValue) || '0';
            } catch {
                display.value = 'Error';
            }
        } else {
            if (displayValue === '0') {
                display.value = keyValue;
            } else {
                display.value += keyValue;
            }
        }
    });
});
