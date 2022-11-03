import Home from "../pages/index";
import "@testing-library/jest-dom";
import { evaluateExpression }  from "../controllers/evaluate_expression";
import { testing } from "../controllers/eval_alpha";

//testing evaluateExpression function
describe("Parsing tests", () => {
// tests should cover the following cases: 
// 1. empty strings
// 2. Simple expressions with the + - * / operators
// 3. Expressions with multiple operators
// 4. expressions with floating point an integers
// 5. expressions with negative numbers
// 6. Test for expressions having the right amount of decimal places
// 7. Testing for order of operations with parenthesis
// 8. Testing for the ^ power operator
// 9. Testing for the natural log operator
// 10. Testing for exponent function
  //test for the exponent function
  test('test simple expression 30^2', () => {
    var result = evaluateExpression("30^2");
    expect(result).toBe("900");
  })
  test('test simple expression exp2', () => {
    var result = evaluateExpression("exp2");
    expect(result).toBe("7.38905609893065");
  })
  test('test simple expression ln2', () => {
    var result = evaluateExpression("ln2");
    expect(result).toBe("0.6931471805599453");
  })
  test('test simple expression log2', () => {
    var result = evaluateExpression("log2");
    expect(result).toBe("0.6931471805599453");
  })
  test('test simple expression 1-5', () => {
    var result = evaluateExpression("1-5");
    expect(result).toBe("-4");
  })
  test('test empty expression', () => {
    var result = evaluateExpression("");
    expect(result).toBe("empty expression");
  });

  test('test simple expression 1+2', () => {
    var result = evaluateExpression("1+2");
    expect(result).toBe("3");
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
  

  
 })


