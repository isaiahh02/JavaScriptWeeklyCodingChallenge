let result;

const operator = prompt('Enter operator ( either + or - ): ');

const number1 = parseFloat(prompt('Please enter a number: '));
const number2 = parseFloat(prompt('Please enter a second number: '));

switch(operator) {
    case '+':
         result = number1 + number2;
        console.log(`${number1} + ${number2} = ${result}`);
        break;
}

switch(operator) {
    case '-':
         result = number1 - number2;
        console.log(`${number1} - ${number2} = ${result}`);
        break;




