export function evaluateExpression(expression) {
    // example function to evaluate the expression
    if (expression == "") {
        return false;
    }
    else {
        //break string into array representing infix expression
        infix = buildInfix(expression);
        postfix = buildPostfix(infix);
        result = evaluatePostFix(postfix);
        return result;
    }
}

//functions for evaluating a valid expression
//takes a string "expression" and converts it into a string array
//where each element of the array is either an int, float, or operator
function buildInfix(expression) {

}

//function for converting an infix expression (represented as an array)
//into a postfix expression (also represented as an array)
function buildPostFix(infix){

}

//function for evaluating a postfix expression (represented as an array)
//and returning a float of the calculated result
function evaluatePostFix(postfix){
    
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

function checkForOperators(expression) {
    for(let i = 0; i < expression.length; i++) {
        if(isNaN(parseInt(expression[i])) && expression[i] != "-") {
            return true;
        }
    }
    return false;
}

function checkForInvalidOperators(expression) {
    for(let i = 0; i < expression.length; i++) {
        if(expression[i] == "/" && expression[i+1] == "0") {
            return false; // we can't divide by 0
        }
    }
    return true;
}

function checkForMultipleOperators(expression) {
    for(let i = 0; i < expression.length; i++) {
        if(isNaN(parseInt(expression[i])) && expression[i] != "-" && expression[i] != ".") {
            if(isNaN(parseInt(expression[i+1])) && expression[i+1] != "-" && expression[i+1] != ".") {
                return true;
            }
        }
    }
    return false;
}

function checkForNumbers(expression) {
    for(let i = 0; i < expression.length; i++) {
        if(!isNaN(parseInt(expression[i]))) {
            return true;
        }
    }
    return false;
}

function checkForParenthesis(expression) {
    for(let i = 0; i < expression.length; i++) {
        if(expression[i] == "(" || expression[i] == ")") {
            return true;
        }
    }
    return false;
}

function checkForInvalidParenthesis(expression) {
    let open = 0;
    let close = 0;
    for(let i = 0; i < expression.length; i++) {
        if(expression[i] == "(") {
            open++;
        }
        else if(expression[i] == ")") {
            close++;
        }
    }
    if(open != close) {
        return true;
    }
    return false;
}

function checkForMultipleParenthesis(expression) {
    for(let i = 0; i < expression.length; i++) {
        if(expression[i] == "(" || expression[i] == ")") {
            if(expression[i+1] == "(" || expression[i+1] == ")") {
                return true;
            }
        }
    }
    return false;
}

function checkForDecimal(expression) {
    for(let i = 0; i < expression.length; i++) {
        if(expression[i] == ".") {
            return true;
        }
    }
    return false;
}


function checkForInvalidDecimals(expression) {
    for(let i = 0; i < expression.length; i++) {
        if(expression[i] == "." && isNaN(parseInt(expression[i+1]))) {
            return false; // we can't have a decimal without a number after it
        }
    }
    return true;
}

function checkForMultipleDecimals(expression) {
    for(let i = 0; i < expression.length; i++) {
        if(expression[i] == ".") {
            if(expression[i+1] == ".") {
                return true;
            }
        }
    }
    return false;
}

function checkForNegative(expression) {
    for(let i = 0; i < expression.length; i++) {
        if(expression[i] == "-") {
            return true;
        }
    }
    return false;
}
