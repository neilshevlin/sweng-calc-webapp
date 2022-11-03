/*
     Returns int code based on result
     *0 = isValidExpression
     *1 = isn't valid: operator issue or empty expression
     *2 = isn't valid: unknown character
     *3 = isn't valid: leading 0
     *4 = isn't valid: incorrect decimal placings
     *5 = isn't valid: incorrect use of brackets
     *6 = isn't valid: Incorrect log or exp function*/
     
     export function isValidexpr(expr)
     {
         var canBeOperator = false;
         var decimalCount = 0;
         var leftBracketUsed = false;
         var checkingLog = false;
         var checkingExp = false;

         if(expr == "")
         {
            return {code: 1, message: "Operator issue or empty expression"};
         }
         else if(expr.length == 1)
         {
             if(isNumber(expr.charAt(0)))
                 return true;
             else
                 return {code: 1, message: "Operator issue or empty expression"};
         }
         for(let i = 0; i < expr.length; i++)
         {
             var currChar = expr.charAt(i);
                 //If it's an operator
                 if(currChar == '+' || currChar == '-' || currChar == '*' || currChar == '/' || currChar == '^')
                 {
                     decimalCount = 0; //reset decimalCount

                     //If it isn't proper operator placement
                     if(!canBeOperator)
                         return {code: 1, message: "Operator issue or empty expression", valid: false};
                         //Final charatcer cannot be operator
                     else if(i == expr.length-1)
                        return {code: 1, message: "Operator issue or empty expression", valid: false};
                         //Otherwise, set canBeOperator to false (prevent double operators)
                     else
                         canBeOperator = false;
                 }
                 //If it's a number, reset canBeOperator
                 else if(isNumber(currChar))
                 {
                     //Zero handling
                     if(currChar == '0')
                     {
                         //Leading 0 handling (make sure expr is 0+/-/* ...)
                         if(i == 0)
                         {
                             if(!isOperator(expr.charAt(i+1)))
                                return {code: 3, message: "Leading 0", valid: false};
                         }
                         //Check if expr isn't +/-/*0... (invalid)
                         else if(isOperator(expr.charAt(i-1)))
                         {
                             //Not final character in string (avoid errors)
                             if(i < expr.length-1)
                             {
                                 //If expr isn't operating on 0 (e.g. +0+)
                                 if(!isOperator(expr.charAt(i+1)))
                                     return {code: 3, message: "Leading 0", valid: false};
                             }
                         }
                     }
                     canBeOperator = true;
                 }
                 //If it is a period (decimal)
                 else if(currChar == '.')
                 {
                    decimalCount++;
                    if(decimalCount >1)
                    {
                        return {code: 4, message: "Incorrect decimal placings", valid: false};
                    }
                    // if it is a . followed by an operator, this is an error. If 
                    if(isOperator(expr.charAt(i+1)))
                    {
                        return {code: 4, message: "Incorrect decimal placings", valid: false};
                    }
                    else if(!isNumber(expr.charAt(i+1)))
                    {
                        return {code: 4, message: "Incorrect decimal placings", valid: false};
                    }
                 }
                 //if it is an open bracket
                 else if(currChar == '(')
                 {
                    //if 2 consecutive left brackets
                    if(leftBracketUsed)
                    {
                        return {code: 5, message: "Incorrect use of brackets", valid: false};
                    }
                    //number before the bracket is an error: 2+3(4*5)
                    else if(isNumber(expr.charAt(i-1)))
                    {
                        return {code: 5, message: "Incorrect use of brackets", valid: false};
                    }
                    leftBracketUsed = true;
                    
                 }
                 //if closing bracket
                 else if(currChar == ')')
                 {
                    //if no left bracket was used before it
                    if(!leftBracketUsed)
                    {
                        return {code: 5, message: "Incorrect use of brackets", valid: false};
                    }
                    //finished checking log function
                    if(checkingLog)
                    {
                        checkingLog = false;
                    }
                    //finished checking exp function
                    if(checkingExp)
                    {
                        checkingExp = false;
                    }
                    if(i+1 < expr.length)
                    {
                        //if the next character is not an operator this is an error: (5+3)5
                        if(!isOperator(expr.charAt(i+1)))
                        {
                            return {code: 5, message: "Incorrect use of brackets", valid: false};
                        }
                    }
                    
                    leftBracketUsed = false; //reset left bracket
                 }
                 //checking log
                 else if(currChar == 'l')
                 {
                    checkingLog = true;
                    //if the next characters do not make up log(x) or ln(x) it returns an error
                    if(expr.charAt(i+1)!='o' || expr.charAt(i+2) != 'g' || expr.charAt(i+3) != '(')
                    {
                        if(expr.charAt(i+1)!='n' || expr.charAt(i+2)!='(')
                        {
                            return {code: 6, message: "Incorrect log function", valid: false};
                        }
                        
                    }
                    else if(i!=0)
                    {
                        //if it is not an operator before the log function it is an error: 34log(7+4)
                        if(!isOperator(expr.charAt(i-1)))
                        {
                            return {code: 6, message: "Incorrect log function", valid: false};
                        }
                    }
                    // var correctLog = checkLogFunction(expr, i);
                 }
                 else if(currChar =='o')
                 {
                    if(!checkingLog)
                    {
                        return {code: 6, message: "Incorrect log function", valid: false};
                    }
                 }
                 else if(currChar =='g')
                 {
                    if(!checkingLog)
                    {
                        return {code: 6, message: "Incorrect log function", valid: false};
                    }
                 }
                 else if(currChar == 'n')
                 {
                    if(!checkingLog)
                    {
                        return {code: 6, message: "Incorrect log function", valid: false};
                    }
                 }
                 //checking exp
                 else if(currChar == 'e')
                 {
                    checkingExp = true;
                    //if the next characters do not make up exp(x) it returns an error
                    if(expr.charAt(i+1)!='x' || expr.charAt(i+2) != 'p' || expr.charAt(i+3) != '(')
                    {
                        return {code: 6, message: "Incorrect log function", valid: false};
                    }
                    else if(i!=0)
                    {
                        //if it is not an operator before the log function it is an error: 34log(7+4)
                        if(!isOperator(expr.charAt(i-1)))
                        {
                            return {code: 6, message: "Incorrect log function", valid: false};
                        }
                    }
                    // var correctLog = checkLogFunction(expr, i);
                 }
                 else if(currChar =='x')
                 {
                    if(!checkingExp)
                    {
                        return {code: 6, message: "Incorrect log function", valid: false};
                    }
                 }
                 else if(currChar =='p')
                 {
                    if(!checkingExp)
                    {
                        return {code: 6, message: "Incorrect log function", valid: false};
                    }
                 }
                     
                 //If it isn't a valid character
                 else
                     return {code: 2, message: "Invalid character", valid: false};
         }
         //Check to see if last character ISN'T operator
         if(isOperator(expr.charAt(expr.length-1)))
         return {code: 1, message: "Operator issue or empty expression", valid: false};
     //Else, return 0 (is valid expression)
     return {code: 0, message: "Valid expression", valid: true};
     }
     
     function isOperator(currChar)
     {
         if(currChar == '+' || currChar == '-' || currChar == '*' || currChar == '/' || currChar == '^')
                 return true;
         return false;
     }
     function isNumber(currChar)
     {
         if(currChar == '1' ||currChar == '2' || currChar == '3' || currChar == '4' || currChar == '5' ||
                     currChar == '6' || currChar == '7' ||currChar == '8' || currChar == '9' ||currChar == '0')
                 return true;
             return false;
     }
    