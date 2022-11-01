export function testing(expression) {
    if (expression == "") {
        return "empty expression";
    }
    let arr = expression.split("");
    
    let numbers = [];

    let operators = [];

    let currentNumber = "";

    for(let i = 0; i < arr.length; i++) {
        if(!isNaN(arr[i])) {
            currentNumber += arr[i];
        }
        //if the char is a . you want to add it to the current number
        else if(arr[i] == ".") {
            currentNumber += arr[i];
            // this decimal is marking the precision of the number. 
            // so we want to use this as a marker for the rest of the answer. 
        }
        if(arr[i] == "+" || arr[i] == "-" || arr[i] == "*" || arr[i] == "/") {
            numbers.push(currentNumber);
            currentNumber = "";
            operators.push(arr[i]);
        }
    }
    numbers.push(currentNumber);

    for(let i = 0; i < operators.length; i++){
        if (operators[i] === '*' || operators[i] === '/') {
            let result = 0;
            if (operators[i] === '*') {
                result = parseFloat(numbers[i]) * parseFloat(numbers[i + 1]);
            }
            if (operators[i] === '/') {
                result = parseFloat(numbers[i]) / parseFloat(numbers[i + 1]);

            }
            numbers.splice(i, 2, result.toString());
            operators.splice(i, 1);
            i--;
        }
    }
    for (let i = 0; i < operators.length; i++) {
        // if operator is addition or subtraction, evaluate the expression and replace the two numbers with the result
        if (operators[i] === '+' || operators[i] === '-') {
            let result = 0;
            if (operators[i] === '+') {
                result = parseFloat(numbers[i]) + parseFloat(numbers[i + 1]);
            }
            if (operators[i] === '-') {
                result = parseFloat(numbers[i]) - parseFloat(numbers[i + 1]);
            }
            numbers.splice(i, 2, result.toString());
            operators.splice(i, 1);
            i--;
        }
    }
    return numbers[0];
}