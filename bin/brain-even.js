#!/usr/bin/env node
import readlineSync from 'readline-sync';
import getGreeting from './cli.js';
import { isEven, getRandomNumber } from '../utils/utilitis.js';

const brainEven = () => {
  const userName = getGreeting();

  const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

  console.log(gameDescription);

  let i = 0;

  while (i < 3) {
    const question = getRandomNumber();

    console.log(`Question: ${question}`);

    const userAnswer = String(readlineSync.question('Your answer: '));
    const evenCondition = userAnswer === 'yes' && isEven(question);
    const notEvenCondition = userAnswer === 'no' && !isEven(question);

    if (evenCondition || notEvenCondition) {
      console.log('Correct!');
      i += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${userName}!`);
      return;
    }
  }

  console.log(`Congratulations, ${userName}!`);
};

export default brainEven();
