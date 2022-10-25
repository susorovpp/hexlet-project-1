#!/usr/bin/env node
import getRandomNumber from '../../utils/utilities.js';
import getGame from '../index.js';

const gameDescription = 'What is the result of the expression?';

const operations = ['+', '-', '*'];

const getCalculating = (firstOperand, secondOperand, operation) => {
  let result = 0;

  switch (operation) {
    case '+':
      result = firstOperand + secondOperand;
      break;
    case '-':
      result = firstOperand - secondOperand;
      break;
    case '*':
      result = firstOperand * secondOperand;
      break;
    default:
      console.error(`You have available variants only ${operations}`);
      break;
  }

  return result;
};

const getQuestionData = () => {
  const firstOperand = getRandomNumber();
  const secondOperand = getRandomNumber();

  const operationsRandomIndex = getRandomNumber(0, operations.length - 1);
  const operation = operations[operationsRandomIndex];

  const question = `${firstOperand} ${operation} ${secondOperand}`;
  const answer = String(getCalculating(firstOperand, secondOperand, operation));

  return { question, answer };
};

export default () => getGame(gameDescription, getQuestionData);
