// Функция проверки длинны строки.
function getLengthString (string, length) {
  if (string.length <= length) {
    return true;
  }
  return false;
}
getLengthString ('Функция для проверки, является ли строка палиндромом', 45); //false

//Функция для проверки, является ли строка палиндромом.
function getPalynodrome (word) {
  word = word.toLowerCase();
  word = word.replaceAll(' ', '');
  for (let i = 1; i <= word.length / 2; i++) {
    if (word[i - 1] === word[word.length - i]) {
      return true;
    }
    return false;
  }
}
getPalynodrome ('Лёша на полке клопа нашёл ');
