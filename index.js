/*
JavaScript Calculator Program

This program will:
1. Implement functions for addition, subtraction, multiplication and division.
2. Store each calculation’s details in an array.
3. Display the history of calculations to the user.
*/

const calculationHistory = [];

// adds two numbers: add(number1, number2)
// subtracts two numbers: subtract (number1, number 2)
// multiplies two numbers: multiply (number1, number2)
// divides two numbers: divide (number1, number2)
// adds a calculation to the history: addToHistory(number1, number2, operator, result)
// displays all calculations in the history: displayHistory()

// adds a calculation to the history: addToHistory(number1, number2, operator, result)
function addToHistory(operand1, operand2, operator, result) {
  const calculation = {
    operand1: operand1,
    operand2: operand2,
    operator: operator,
    result: result
  };

  calculationHistory.push(calculation);
}

// displays all calculations in the history: displayHistory() or a message when no calculations are stored
function displayHistory() {
  if (calculationHistory.length === 0) {
    console.log("No calculations stored.");
    return;
  }

  console.log("Calculation History:");

  calculationHistory.forEach(function (calculation) {
    console.log(
      `${calculation.operand1} ${calculation.operator} ${calculation.operand2} = ${calculation.result}`
    );
  });
}

// adds two numbers: add(number1, number2) and stores the calculation
function add(number1, number2) {
  const result = number1 + number2;

  addToHistory(number1, number2, "+", result);

  return result;
}

// subtracts two numbers: subtract (number1, number 2) and stores the calculation
function subtract(number1, number2) {
  const result = number1 - number2;

  addToHistory(number1, number2, "-", result);

  return result;
}

// multiplies two numbers: multiply (number1, number2) and stores the calculation
function multiply(number1, number2) {
  const result = number1 * number2;

  addToHistory(number1, number2, "*", result);

  return result;
}

// divides two numbers: divide (number1, number2) and stores the calculation
function divide(number1, number2) {
  if (number2 === 0) {
    console.log("Error: Cannot divide by zero.");
    return;
  }

  const result = number1 / number2;

  addToHistory(number1, number2, "/", result);

  return result;
}


console.log("Calculator running");

console.log("Addition result:", add(132, 8));
console.log("Subtraction result:", subtract(220, 7));
console.log("Multiplication result:", multiply(65, 4));
console.log("Division result:", divide(128, 3));
console.log("Division by zero:", divide(10, 0));
console.log("Decimal result:", add(5.5, 1.5));
console.log("Negative result:", subtract(5, 10));

displayHistory();
