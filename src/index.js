import readlineSync from 'readline-sync';

const roundsCount = 3;

export default (gameDescription, getQuestionAnswer) => {
  console.log('Welcome to the Brain Games!');
  console.log(gameDescription);
  console.log('');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('');

  for (let i = 1; i <= roundsCount; i += 1) {
    const { question, answer } = getQuestionAnswer();

    console.log(`Question: ${question}`);

    const userAnswer = readlineSync.question('Your answer: ');

    if (answer !== userAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};
