// Генерация случайного числа в диатазоне (min, max)
function getRandomInteger (min, max) {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
}

// Генерация случайного не повторяющегося числа в диатазоне (min, max)
function createRandomIdFromRangeGenerator (min, max) {
  const previousValues = [];

  return function () {
    let currentValue = getRandomInteger(min, max);
    if (previousValues.length >= (max - min + 1)) {
      return null;
    }
    while (previousValues.includes(currentValue)) {
      currentValue = getRandomInteger(min, max);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
}

// Выбор случайного элемента из массива.
function getRandomArrayElement (elements) {
  return elements[getRandomInteger(0, elements.length - 1)];
}

export {getRandomArrayElement, createRandomIdFromRangeGenerator, getRandomInteger};
