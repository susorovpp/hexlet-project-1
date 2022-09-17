export const isEven = (num) => num % 2 === 0;

// eslint-disable-next-line max-len
export const getRandomNumber = (min = 1, max = 100) => Math.floor(Math.random() * (max - min + 1)) + min;
