import { isValidexpr } from "./validate_expression";

export function evaluateExpression(expression) {
    // example function to evaluate the expression
    if (expression == "") {
        return "empty expression";
    }
    else {
        //remove all spaces from expression
        expression = expression.replace(/\s/g, '');
        //check that string is valid here
        
        let isValid = isValidexpr(expression);

        
        if(isValid.valid){
            //if string valid, break into infix expression as array
            let infix = buildInfix(expression);
            //if infix is empty, an error has occured, return false
            // check if an array is empty
            if(infix.length == 0)
                return false;

            //convert infix exp into postfix exp
            let postfix = buildPostfix(infix);
            //if postfix is empty, an error has occured, return false
            if(postfix.length == 0)
                return false;

            //evaluate result as float from postfix expression
            let result = evaluatePostFix(postfix);

            //limit the result to only three decimal places
            let resString = result.toString()
            //if result is not an error message, limit
            if(!isNaN(resString) && resString.toString().indexOf('.') != -1)
                resString = parseFloat(resString).toFixed(3);
            return resString;
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
    let number = ""
    let infix = []

    for(let i = 0; i < expression.length; i++){
        //if integer or . is encountered, add to current number  
        if(!isNaN(parseInt(expression.charAt(i))) || expression.charAt(i) == '.')
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
            if(number != "")
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
            if(number != "")
                infix.push(number);
            number = "";
            infix.push("log");
        }
        else if (expression.charAt(i) == 'e' &&
                expression.charAt(i+1) == 'x' &&
                expression.charAt(i+2) == 'p')
        {
            i += 2
            if(number != "")
                infix.push(number);
            number = "";
            infix.push("exp");
        }
        // natural log operations
        else if(
            expression.charAt(i) == 'l' &&
            expression.charAt(i+1) == 'n')
        {
            i += 1
            if(number != "")
                infix.push(number);
            number = "";
            infix.push("ln");
        }

        //sine trigonometry function
        else if (expression.charAt(i) == 's' &&
                expression.charAt(i+1) == 'i' &&
                expression.charAt(i+2) == 'n')
        {
            i += 2
            if(number != "")
                infix.push(number);
            number = "";
            infix.push("sin");
        }
        //cosine trigonometry function
        else if (expression.charAt(i) == 'c' &&
                expression.charAt(i+1) == 'o' &&
                expression.charAt(i+2) == 's')
        {
            i += 2
            if(number != "")
                infix.push(number);
            number = "";
            infix.push("cos");
        }
        //tangent trigonometry function
        else if (expression.charAt(i) == 't' &&
                expression.charAt(i+1) == 'a' &&
                expression.charAt(i+2) == 'n')
        {
            i += 2
            if(number != "")
                infix.push(number);
            number = "";
            infix.push("tan");
        }

        // pi constant number
        else if(
            expression.charAt(i) == 'p' &&
            expression.charAt(i+1) == 'i')
        {
            i += 1
            if(number != "")
                //if number != expression was not valid, pi must have an operator on either side
                //return error case
                return []
            infix.push(Math.PI.toString());

        }


        else {
            //if reached here then string is not valid, return error
            return [];
        }
    }//end of for loop through expression

    //at end of string, should have unpushed number left over (no operator was encountered to push it), so push that
    if(number != "")
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
    if(opr == "sin" || opr == "cos" || opr == "tan")
        return 4;
    if(opr == "log" || opr == "exp" || opr == "ln")
        return 5;
    return 0;
}

//function for converting an infix expression (represented as an array)
//into a postfix expression (also represented as an array)
function buildPostfix(infix){
    //create empty stacks for method
    let postfix = [];
    let operatorStack = [];

    //iterate through infix
    let i = 0;
    while(i < infix.length){
        //get current string as variable x
        let x = infix[i]

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
            if(operatorStack.length == 0)
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
    if(!operatorStack.length == 0){
        while(!operatorStack.length == 0){
            postfix.push(operatorStack.pop());
        }
    }

    //return the final postfix array expression
    return postfix;
}

//function for evaluating a postfix expression (represented as an array)
//and returning a float of the calculated result
function evaluatePostFix(postfix){
    let calculationStack = [];

    //iterate through postfix expression and resolve every number and operator
    for(let i = 0; i < postfix.length; i++){

        //if operator encountered, pop from calculation stack and perform operation
        if(getOperatorPrecedence(postfix[i])){
            switch(postfix[i]){
                case "+": 
                    calculationStack.push( calculationStack.pop() + calculationStack.pop() );
                    break;
                case "-":
                    let subtrahend = calculationStack.pop();
                    let minuend = calculationStack.pop();
                    calculationStack.push(minuend - subtrahend);
                    break;
                case "*":
                    calculationStack.push( calculationStack.pop() * calculationStack.pop() );
                    break;
                case "/":
                    let divisor = calculationStack.pop();
                    let dividend = calculationStack.pop();
                    //return error message if division by zero
                    if(divisor == 0)
                        return "Error: Division by Zero";
                    calculationStack.push(dividend / divisor);
                    break;
                case "^":
                    let exponent = calculationStack.pop();
                    let base = calculationStack.pop();
                    calculationStack.push(Math.pow(base, exponent));
                    break;
                case "log":
                    calculationStack.push( Math.log(calculationStack.pop()) );
                    break;
                case "exp":
                    calculationStack.push( Math.exp(calculationStack.pop()) );
                    break;
                case "ln":
                    calculationStack.push( Math.log(calculationStack.pop()) );
                    break;
                case "sin":
                    calculationStack.push( Math.sin(calculationStack.pop()) );
                    break;
                case "cos":
                    calculationStack.push( Math.cos(calculationStack.pop()) );
                    break;
                case "tan":
                    calculationStack.push( Math.tan(calculationStack.pop()) );
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

