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

/* Функция, которая принимает строку, извлекает содержащиеся в ней цифры от 0 до 9
и возвращает их в виде целого положительного числа. Если в строке нет ни одной цифры,
функция должна вернуть NaN */

function getNumber (string) {
  if (typeof string === 'number') {
    string = String(string);
  }
  string = string.replace(/[^0-9]/g, '');
  return parseInt(string, 10);
}

getNumber ('текст 666 текст'); //getNumber (-9.999); (тоже работает =) )

/* Функция, которая принимает три параметра:
исходную строку, минимальную длину и строку
с добавочными символами — и возвращает исходную строку,
дополненную указанными символами до заданной длины.
Символы добавляются в начало строки. Если исходная строка превышает заданную длину,
она не должна обрезаться. Если «добивка» слишком длинная, она обрезается с конца. */

function getOriginalString(stringOriginal, length, stringAdditional) {
  if (stringOriginal.length >= length) {
    return stringOriginal;
  }
  let subtotal = '';
  let total = '';
  const remainder = length - stringOriginal.length;
  while (total.length !== remainder) {
    subtotal = stringAdditional + total;
    if (subtotal.length <= remainder) {
      total = subtotal;
    }
    total = stringAdditional.slice(0, remainder - total.length) + total;
    break;
  }
  return total + stringOriginal;
}

getOriginalString ('q', 4, 'we'); //"wweq"
