import getRandomNumber from '../../utils/utilities.js';
import getGame from '../index.js';

const gameDescription = 'What number is missing in the progression?';

const getProgression = (start, step, length) => {
  const result = [];

  for (let i = 0; i <= length - 1; i += 1) {
    result.push(start + step * i);
  }
  return result;
};

const progressionLength = 10;

const getQuestionData = () => {
  const firstTerm = getRandomNumber(0, 100);
  const difference = getRandomNumber(1, 10);
  const progression = getProgression(firstTerm, difference, progressionLength);
  const answer = String(progression.splice(getRandomNumber(0, progressionLength), 1, '..'));
  const question = progression.join(' ');

  return { question, answer };
};

export default () => getGame(gameDescription, getQuestionData);
