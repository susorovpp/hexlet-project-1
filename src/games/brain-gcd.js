import getRandomNumber from '../../utils/utilities.js';
import getGame from '../index.js';

const gameDescription = 'Find the greatest common divisor of given numbers.';

const getGCD = (firstNum, secondNum) => {
  if (secondNum === 0) {
    return firstNum;
  }

  const reminder = firstNum % secondNum;

  return getGCD(secondNum, reminder);
};

const getQuestionData = () => {
  const firstOperand = getRandomNumber();
  const secondOperand = getRandomNumber();

  const question = `${firstOperand} ${secondOperand}`;
  const answer = String(getGCD(firstOperand, secondOperand));

  return { question, answer };
};

export default () => getGame(gameDescription, getQuestionData);
