import Home from "../pages/index";
// import "@isValidexpr-library/jest-dom";
import { evaluateExpression }  from "../controllers/evaluate_expression";
import { testing } from "../controllers/eval_alpha";
import { isValidexpr } from "../controllers/validate_expression";

//isValidexpr evaluateExpression function
describe("Parsing tests", () => {
// tests should cover the following cases: 
// 1. empty strings
// 2. Simple expressions with the + - * / operators
// 3. Expressions with multiple operators
// 4. expressions with floating point an integers
// 5. expressions with negative numbers
// 6. Test for expressions having the right amount of decimal places
// 7. isValidexpr for order of operations with parenthesis
// 8. isValidexpr for the ^ power operator
// 9. isValidexpr for the natural log operator
// 10. isValidexpr for exponent functions

//Testing empty expression
  test('test empty expression', () => {
    var result = isValidexpr("");
    expect(result).toBe(1);
  });

//Testing simple expressions
  test('test simple expression 1+2', () => {
    var result = isValidexpr("1+1");
    expect(result).toBe(0);
  })

  test('test simple expression 1-2', () => {
    var result = isValidexpr("1-1");
    expect(result).toBe(0);
  })

  test('test simple expression 1*2', () => {
    var result = isValidexpr("1*1");
    expect(result).toBe(0);
  })

  test('test simple expression 1/2', () => {
    var result = isValidexpr("1/2");
    expect(result).toBe(0);
  })

  test('test simple expression 1+2+3', () => {
    var result = isValidexpr("1+1+1");
    expect(result).toBe(0);
  })

  test('test simple expression 1+2-3', () => {
    var result = isValidexpr("1+1-1");
    expect(result).toBe(0);
  })

  test('test simple expression 1+2*3', () => {
    var result = isValidexpr("1+1*1");
    expect(result).toBe(0);
  })

  test('test simple expression 1+2/3', () => {
    var result = isValidexpr("1+1/1");
    expect(result).toBe(0);
  })

//Testing decimal expressions
  test('test expression 10*30.0', () => {
    var result = isValidexpr("10*30.0");
    expect(result).toBe(0);
  })
  test('test expression 10*30.2', () => {
    var result = isValidexpr("10*30.2");
    expect(result).toBe(0);
  })
//testing power(^) expressions
test('test expression 10*30.2^45', () => {
  var result = isValidexpr("10*30.2^45");
  expect(result).toBe(0);
})

//testing expression with brackets
test('test expression 2+(3+2)', () => {
  var result = isValidexpr("2+(3+2)");
  expect(result).toBe(0);
})
test('test expression 2+(3+2)*3+(4.2)', () => {
  var result = isValidexpr("2+(3+2)*3+(4.2)");
  expect(result).toBe(0);
})
  
//testing expression with log function
test('test expression 2+log(7)', () => {
  var result = isValidexpr("2+log(7)");
  expect(result).toBe(0);
})
test('test expression log(8+4*7)*5', () => {
  var result = isValidexpr("log(8+4*7)*5");
  expect(result).toBe(0);
})

//testing expression with exp function
test('test expression 2+exp(7)', () => {
  var result = isValidexpr("2+exp(7)");
  expect(result).toBe(0);
})
test('test expression exp(8+4*7)*5', () => {
  var result = isValidexpr("exp(8+4*7)*5");
  expect(result).toBe(0);
})


//Testing operator issues
test('test expression 1++2*3', () => {
  var result = isValidexpr("1++2*3");
  expect(result).toBe(1);
})

//Testing unknown characters
test('test expression 1+2*c3', () => {
  var result = isValidexpr("1+2*c3");
  expect(result).toBe(2);
})

//Testing leading 0's
test('test expression 1+2*03', () => {
  var result = isValidexpr("1+2*03");
  expect(result).toBe(3);
})

//testing incorrect decimal places
test('test expression 10*30.+', () => {
  var result = isValidexpr("10*30.+");
  expect(result).toBe(4);
})
test('test expression 10*30.204.56', () => {
  var result = isValidexpr("10*30.204.56");
  expect(result).toBe(4);
})

//testing incorrect use of brackets
test('test expression 10.4*3(3+2)', () => {
  var result = isValidexpr("10.4*3(3+2)");
  expect(result).toBe(5);
})
test('test expression 10.4*3(3+2', () => {
  var result = isValidexpr("10.4*3(3+2)");
  expect(result).toBe(5);
})
test('test expression 10.4*33+2)', () => {
  var result = isValidexpr("10.4*3(3+2)");
  expect(result).toBe(5);
})
test('test expression 10.4*3((3+2)', () => {
  var result = isValidexpr("10.4*3(3+2)");
  expect(result).toBe(5);
})

//testing invalid log or exp functions
test('test expression log(8+(4*7)*5', () => {
  var result = isValidexpr("log(8+(4*7)*5");
  expect(result).toBe(5);
})
test('test expression logg(8+4*7)*5', () => {
  var result = isValidexpr("logg(8+4*7)*5");
  expect(result).toBe(6);
})
test('test expression 5+3log(2)', () => {
  var result = isValidexpr("5+3log(2)");
  expect(result).toBe(6);
})
test('test expression exp(8+(4*7)*5', () => {
  var result = isValidexpr("exp(8+(4*7)*5");
  expect(result).toBe(5);
})
test('test expression expp(8+4*7)*5', () => {
  var result = isValidexpr("expp(8+4*7)*5");
  expect(result).toBe(6);
})
test('test expression 5+3exp(2)', () => {
  var result = isValidexpr("5+3exp(2)");
  expect(result).toBe(6);
})
 })


