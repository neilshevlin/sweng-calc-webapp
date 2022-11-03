import { isValidexpr } from "./validate_expression";

export function evaluateExpression(expression) {
    // example function to evaluate the expression
    if (expression == "") {
        return false;
    }
    else {
        //remove all spaces from expression
        expression = expression.replace(/\s/g, '');
        //check that string is valid here
        let isValid = isValidexpr(expression);

        
        if(isValid){
            //if string valid, break into infix expression as array
            infix = buildInfix(expression);
            //if infix is empty, an error has occured, return false
            if(infix.isEmpty())
                return false;

            //convert infix exp into postfix exp
            postfix = buildPostfix(infix);
            //if postfix is empty, an error has occured, return false
            if(postfix.isEmpty())
                return false;

            //evaluate result as float from postfix expression
            result = evaluatePostFix(postfix);
            return result;
        }else{
            //if expression not valid, return false (error)
            return false;
        }
        
    }
}


//functions for evaluating a valid expression
//takes a string "expression" and converts it into a string array
//where each element of the array is either an int, float, or operator
function buildInfix(expression) {
    number = ""
    infix = []

    for(let i = 0; i < expression.length; i++){
        //if integer or . is encountered, add to current number  
        if(isNaN(parseInt(expression.charAt(i))) || expression.charAt(i) == '.')
            number += expression[i];

        //use encountering a valid character that is not an int or floating point
        //in order to determine when a float is finished in string

        //if solo operator encountered, add number built so far to array
        //and then push operator as new element
        else if(expression.charAt(i) == '+' ||       //addition
           expression.charAt(i) == '-' ||       //subtractio 
           expression.charAt(i) == '*' ||       //multiplication
           expression.charAt(i) == '/' ||       //division
           expression.charAt(i) == '(' ||       //L brackets
           expression.charAt(i) == ')' ||       //R brackets
           expression.charAt(i) == '^')         //power
        {
            infix.push(number);
            number = "";
            infix.push("" + expression.charAt(i));
        }

        //log and exp operators require special functions
        //to append them to array, and increment i
        else if(expression.charAt(i) == 'l' &&
                expression.charAt(i+1) == 'o' &&
                expression.charAt(i+2) == 'g')
        {
            i += 2
            infix.push(number);
            number = "";
            infix.push("log");
        }
        else if (expression.charAt(i) == 'e' &&
                expression.charAt(i+1) == 'x' &&
                expression.charAt(i+2) == 'p')
        {
            i += 2
            infix.push(number);
            number = "";
            infix.push("exp");
        }

        else {
            //if reached here then string is not valid, return error
            return [];
        }
    }//end of for loop through expression

    //at end of string, should have unpushed number left over (no operator was encountered to push it), so push that
    infix.push(number);
    //return expression as infix array
    return infix;
}

//function for gettin precedence of operator
//used in buildPostFix
function getOperatorPrecedence(opr){
    if(opr == "+" || opr == "-")
        return 1;
    if(opr == "*" || opr == "/")
        return 2;
    if(opr == "^")
        return 3;
    if(opr == "log" || opr == "exp")
        return 4;
    return 0;
}

//function for converting an infix expression (represented as an array)
//into a postfix expression (also represented as an array)
function buildPostfix(infix){
    //create empty stacks for method
    postfix = [];
    operatorStack = [];

    //iterate through infix
    i = 0;
    while(i < infix.length){
        //get current string as variable x
        x = infix[i]

        //if opened brackets, push to stack
        if(x == "(")
            operatorStack.push(x);

        //if closed brackets, push operators to postfix until running into opening bracket
        else if(x == ")"){
            while(operatorStack[operatorStack.length -1] != "("){
                postfix.push(operatorStack.pop()); }
            operatorStack.pop();
        }

        //if x is an operator
        else if(getOperatorPrecedence(x) > 0){

            //very first operator is pushed to stack
            if(operatorStack.isEmpty())
                operatorStack.push(x);
            
            //check precedence order of the top of stack and incoming operator
            //if stack top has higher priority pop it and put in postfix
            //if precedence is lower priority, push incoming onto stack
            else{
                if(getOperatorPrecedence(operatorStack[operatorStack.length -1]) >= getOperatorPrecedence(x)){
                    postfix.push(operatorStack.pop());
                    operatorStack.push(x);
                }else{
                    operatorStack.push(x);
                }
            }
        }

        //else, if number, add to postfix expression
        else{
            postfix.push(x);
        }
        //increment index
        i++;
    }// end of while loop

    //if infix is fully iterated through, pop all remaining elements in operatorStack to postfix
    if(!operatorStack.isEmpty())
        while(!operatorStack.isEmpty())
            postfix.push(operatorStack.pop());

    //return the final postfix array expression
    return postfix;
}

//function for evaluating a postfix expression (represented as an array)
//and returning a float of the calculated result
function evaluatePostFix(postfix){
    calculationStack = [];

    //iterate through postfix expression and resolve every number and operator
    for(let i = 0; i < postfix.length; i++){

        //if operator encountered, pop from calculation stack and perform operation
        if(getOperatorPrecedence(postfix[i])){
            switch(postFix[i]){
                case "+": 
                    calculationStack.push( calculationStack.pop() + calculationStack.pop() );
                    break;
                case "-":
                    calculationStack.push( calculationStack.pop() - calculationStack.pop() );
                    break;
                case "*":
                    calculationStack.push( calculationStack.pop() * calculationStack.pop() );
                    break;
                case "/":
                    calculationStack.push( calculationStack.pop() / calculationStack.pop() );
                    break;
                case "^":
                    calculationStack.push( Math.pow(calculationStack.pop(), calculationStack.pop()) );
                    break;
                case "log":
                    calculationStack.push( Math.log(calculationStack.pop()) );
                    break;
                case "exp":
                    calculationStack.push( Math.exp(calculationStack.pop()) );
                    break;
                default:
                    break;
            }
        }else{
            //if number encountered, parse string into a float, and push it to calculation stack
            calculationStack.push(parseFloat(postfix[i]));
        }
    }// end of for loop
    //return the only value left on the calculation stack
    return calculationStack.pop();
}

//function for checking if an expression is valid
//calls all specific validation methods listed below
function validateExpression(exp){
    if(checkFirstChar(exp) &&
       checkLastChar(exp) &&
       checkForInvalidCharacters(exp) &&
       checkForOperators(exp) &&
       checkForInvalidOperators(exp) &&
       checkForMultipleOperators(exp) &&
       checkForNumbers(exp) &&
       checkForParenthesis(exp) &&
       checkForInvalidParenthesis(exp) &&
       checkForMultipleParenthesis(exp) &&
       checkForDecimal(exp) &&
       checkForInvalidDecimals(exp) &&
       checkForMultipleDecimals(exp) &&
       checkForNegative(exp))   //add additional validation checks to this if statement as they are written
       //if passed all checks, return true
        return true;
        
    //if failed one ore more checks, return false
    return false
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
