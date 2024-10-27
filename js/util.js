const getRandomInteger = (a, b) => {
  let lower = Math.ceil(Math.min(a, b));
  let upper = Math.floor(Math.max(a, b));
  let result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

export {getRandomInteger, getRandomArrayElement};