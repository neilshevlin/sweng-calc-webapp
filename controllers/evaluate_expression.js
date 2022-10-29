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