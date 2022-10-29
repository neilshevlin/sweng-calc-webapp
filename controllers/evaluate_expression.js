export function evaluateExpression(expression) {
    // example function to evaluate the expression
    if (expression == "") {
        return false;
    }
    else {
        return expression;
    }
}

// we can make a bunch of other functions to evaluate the string if we need to. 

function checkFirstChar(expression) {
    if(isNaN(parseInt(expression[0])) && expression[0] != "-") {
        return false;
    }
    return true;
}

function checkLastChar(expression) {
    if(isNaN(parseInt(expression[expression.length-1]))) {
        return false;
    }
    return true;
}

function checkForInvalidCharacters(expression) {
    for(let i = 0; i < expression.length; i++) {
        if(isNaN(parseInt(expression[i])) && expression[i] != "+" && expression[i] != "-" && expression[i] != "*" && expression[i] != "/") {
            return false;// invalid character
        }
    }
    return true;
}







