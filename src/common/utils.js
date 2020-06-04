import { OPERATOR } from "./constants";

const getResult = (operand1, operand2, operator) => {
  let result;
  switch (operator) {
    case OPERATOR.PLUS:
      result = operand1 + operand2;
      break;
    case OPERATOR.MINUS:
      result = operand1 - operand2;
      break;
    case OPERATOR.MULTIPLY:
      result = operand1 * operand2;
      break;
    case OPERATOR.DIVISION:
      result = operand1 / operand2;
      break;
    default:
      break;
  }
  return result;
};

export { getResult };
