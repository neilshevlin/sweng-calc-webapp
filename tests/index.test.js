import Home from "../pages/index";
import "@testing-library/jest-dom";
import { evaluateExpression }  from "../controllers/evaluate_expression";

//testing evaluateExpression function
describe("Parsing tests", () => {
  test('validating correct expression....', () => {
    // arrange and act
    var result = evaluateExpression("2+3");
  
    // assert
    expect(result).toBe("2+3");
  });
  test('validating incorrect expression....', () => {
    // arrange and act
    var result = evaluateExpression("");
  
    // assert
    expect(result).toBe(false);
  });
 })


