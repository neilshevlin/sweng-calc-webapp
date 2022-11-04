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
 
  test('test simple expression exp(2)', () => {//failing
    var result = evaluateExpression("exp(2)");
    expect(result).toBe("7.38905609893065");
  })
  
  test('test simple expression log(2)', () => {//failing
    var result = evaluateExpression("log(2)");
    expect(result).toBe("0.6931471805599453");
  })
  test('test simple expression 1-5', () => {
    var result = evaluateExpression("1-5");//failing
    expect(result).toBe("-4");
  })
  test('test simple expression 1+1', () => {
    var result = isValidexpr("1+1");
    expect(result.code).toBe(0);
  })
  test('test simple expression 1-2', () => {
    var result = isValidexpr("1-2");
    expect(result.code).toBe(0);
  })

  test('test simple expression 1*2', () => {
    var result = isValidexpr("1*2");
    expect(result.code).toBe(0);
  })

  test('test simple expression 1/2', () => {
    var result = isValidexpr("1/2");
    expect(result.code).toBe(0);
  })

  test('test simple expression 1+2+3', () => {
    var result = isValidexpr("1+1+1");
    expect(result.code).toBe(0);
  })
  test('test simple expression 30^2', () => {
    var result = evaluateExpression("30^2");
    expect(result).toBe("900");
  })
  test('test empty expression', () => {
    var result = isValidexpr("");
    expect(result.code).toBe(1);
  })

  test('test simple expression 1+2-3', () => {
    var result = isValidexpr("1+1-1");
    expect(result.code).toBe(0);
  })

  test('test simple expression 1+2*3', () => {
    var result = isValidexpr("1+1*1");
    expect(result.code).toBe(0);
  })

  test('test simple expression 1+2/3', () => {
    var result = isValidexpr("1+1/1");
    expect(result.code).toBe(0);
  })
  test('test expression 10*30.0', () => {
    var result = isValidexpr("10*30.0");
    expect(result.code).toBe(0);
  })
  test('test expression 10*30.2', () => {
    var result = isValidexpr("10*30.2");
    expect(result.code).toBe(0);
  })
test('test expression 10*30.2^45', () => {
  var result = isValidexpr("10*30.2^45");
  expect(result.code).toBe(0);
})
test('test expression 2+(3+2)', () => {
  var result = isValidexpr("2+(3+2)");
  expect(result.code).toBe(0);
})
test('test expression 2+(3+2)*3+(4.2)', () => {
  var result = isValidexpr("2+(3+2)*3+(4.2)");
  expect(result.code).toBe(0);
})
test('test expression 2+log(7)', () => {
  var result = isValidexpr("2+log(7)");
  expect(result.code).toBe(0);
})
test('test expression log(8+4*7)*5', () => {
  var result = isValidexpr("log(8+4*7)*5");
  expect(result.code).toBe(0);
})
test('test expression ln(8+4*7)*5', () => {
  var result = isValidexpr("ln(8+4*7)*5");
  expect(result.code).toBe(0);
})
test('test expression 2+exp(7)', () => {
  var result = isValidexpr("2+exp(7)");
  expect(result.code).toBe(0);
})
test('test expression exp(8+4*7)*5', () => {
  var result = isValidexpr("exp(8+4*7)*5");
  expect(result.code).toBe(0);
})

test('test expression 1++2*3', () => {
  var result = isValidexpr("1++2*3");
  expect(result.code).toBe(1);
})
test('test expression 1+2*c3', () => {
  var result = isValidexpr("1+2*c3");
  expect(result.code).toBe(2);
})
test('test expression 1+2*03', () => {
  var result = isValidexpr("1+2*03");
  expect(result.code).toBe(3);
})
test('test expression 10*30.+', () => {
  var result = isValidexpr("10*30.+");
  expect(result.code).toBe(4);
})
test('test expression 10*30.204.56', () => {
  var result = isValidexpr("10*30.204.56");
  expect(result.code).toBe(4);
})
test('test expression 10.4*3(3+2)', () => {
  var result = isValidexpr("10.4*3(3+2)");
  expect(result.code).toBe(5);
})
test('test expression 10.4*3(3+2', () => {
  var result = isValidexpr("10.4*3(3+2)");
  expect(result.code).toBe(5);
})
test('test expression 10.4*33+2)', () => {
  var result = isValidexpr("10.4*3(3+2)");
  expect(result.code).toBe(5);
})
test('test expression 10.4*3((3+2)', () => {
  var result = isValidexpr("10.4*3(3+2)");
  expect(result.code).toBe(5);
})
test('test expression log(8+(4*7)*5', () => {
  var result = isValidexpr("log(8+(4*7)*5");
  expect(result.code).toBe(5);
})
test('test expression logg(8+4*7)*5', () => {
  var result = isValidexpr("logg(8+4*7)*5");
  expect(result.code).toBe(6);
})
test('test expression 5+3log(2)', () => {
  var result = isValidexpr("5+3log(2)");
  expect(result.code).toBe(6);
})
test('test expression exp(8+(4*7)*5', () => {
  var result = isValidexpr("exp(8+(4*7)*5");
  expect(result.code).toBe(5);
})
test('test expression expp(8+4*7)*5', () => {
  var result = isValidexpr("expp(8+4*7)*5");
  expect(result.code).toBe(6);
})
test('test expression 5+3exp(2)', () => {
  var result = isValidexpr("5+3exp(2)");
  expect(result.code).toBe(6);
})
  test('test simple expression 1*2', () => {
    var result = evaluateExpression("1*2");
    expect(result).toBe("2");
  })

  test('test simple expression 1/1', () => {
    var result = evaluateExpression("1/1");
    expect(result).toBe("1");
  })

  test('test simple expression 1+2+3', () => {
    var result = evaluateExpression("1+2+3");
    expect(result).toBe("6");
  })

  test('test simple expression 1+2-3', () => {
    var result = evaluateExpression("1+2-3");
    expect(result).toBe("0");
  })

  test('test simple expression 1+2*3', () => {
    var result = evaluateExpression("1+2*3");
    expect(result).toBe("7");
  })
  test('test simple expression 200/5', () => {
    var result = evaluateExpression("200/5");
    expect(result).toBe("40");
  })
  test('test simple expression 1+2*3/4', () => {
    var result = evaluateExpression("1+2*3/4");
    expect(result).toBe("2.5");
  })
  test('test simple expression 1+2*3/4-5', () => {
    var result = evaluateExpression("1+2*3/4-5");
    expect(result).toBe("-2.5");
  })
  test('test simple expression 1+2*3/4-5+6', () => {
    var result = evaluateExpression("1+2*3/4-5+6");
    expect(result).toBe("3.5");
  })
  test('test simple expression 2^2', () => {
    var result = evaluateExpression("2^2");
    expect(result).toBe("4");
  })
  test('test simple expression 2^2^2', () => {
    var result = evaluateExpression("2^2^2");
    expect(result).toBe("16");
  })
  test('test simple expression 2.4 + exp(2)', () => {
    var result = evaluateExpression("2.4 + exp(2)");
    expect(result).toBe("9.78905609893065");
  })
  test('test simple expression 1.5 + log(3)', () => {
    var result = evaluateExpression("1.5 + log(3)");
    expect(result).toBe("2.5986122886681096");
  })
  test('test simple expression 4/0', () => {
    var result = evaluateExpression("4/0");
    expect(result).toBe("Error: Division by Zero");
  })
  test('test simple expression sin(6) + log(20) - cos(1) * tan(4/5)', () => {
    var result = evaluateExpression("sin(6) + log(20) - cos(1) * tan(4/5)");
    expect(result).toBe("2.160000688770009");
  })
});
