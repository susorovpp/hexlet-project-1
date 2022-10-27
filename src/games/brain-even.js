import getRandomNumber from '../../utils/utilities.js';
import getGame from '../index.js';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

export const isEven = (num) => num % 2 === 0;

const getQuestionData = () => {
  const question = getRandomNumber();
  const answer = isEven(question) ? 'yes' : 'no';

  return { question, answer };
};

export default () => getGame(gameDescription, getQuestionData);
