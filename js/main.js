/* createPhotoDescription Обьект состоит из 5 ключей:
1. id, число — идентификатор опубликованной фотографии.
Это число от 1 до 25. Идентификаторы не должны повторяться.
2. url, строка — адрес картинки вида photos/{{i}}.jpg, где {{i}} — это число от 1 до 25. Адреса картинок не должны повторяться.
3. description, строка — описание фотографии.
4. likes, число — количество лайков, поставленных фотографии.Случайное число от 15 до 200.

5. comments, массив объектов — список комментариев, оставленных другими пользователями к этой фотографии.
Количество комментариев к каждой фотографии вы определяете на своё усмотрение. Все комментарии генерируются случайным образом.
comments = [
  5.1. id — любое число. Идентификаторы не должны повторяться.
  5.2. avatar — это строка, значение которой формируется по правилу img/avatar-{{случайное число от 1 до 6}}.svg. Аватарки подготовлены в директории img.
  5.3. message — Для формирования текста комментария вам необходимо взять одно или два случайных предложения из представленных ниже:
  5.4. name — Имена авторов также должны быть случайными.
]
*/

// Генерация случайного числа в диатазоне (min, max)
function getRandomInteger (min, max) {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
}

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

// 1. идентификатор опубликованной фотографии publishedPhotoId
const minId = 1;
const maxId = 25;
const publishedPhotoId = createRandomIdFromRangeGenerator(minId, maxId);

// 2. url, строка — адрес картинки
const minUrl = 1;
const maxUrl = 25;
const photoUrlId = createRandomIdFromRangeGenerator(minUrl, maxUrl);

//3. description, строка — описание фотографии.

const descriptions = [
  'Некоторые дни начинаются лучше остальных.',
  'Сегодня в моей душе солнце.',
  'Если ты ищешь того человека, который изменит твою жизнь, просто возьми и посмотри в зеркало.',
  'Красота лишь привлекает внимание, душа – завоевывает сердце.',
  'Все, что мы отдаем, возвращается вновь.',
  'Цени моменты.',
  'Улыбайся больше, смейся чаще.',
  'Счастье никогда не выйдет из моды.',
  'Они говорили мне, что я не смогу, поэтому я это сделала.'
];
//getRandomArrayElement (descriptions);

//4. likes, число — количество лайков, поставленных фотографии.Случайное число от 15 до 200
const minLikes = 15;
const maxLikes = 200;

//5.1. id — любое число.
const minCommentId = 0;
const maxCommentId = 47389; //не понятно как узнать число без ограничений
const commentPhotoId = createRandomIdFromRangeGenerator (minCommentId, maxCommentId);

//5.2. avatar — это строка, значение которой формируется по правилу img/avatar-{{случайное число от 1 до 6}}.svg. Аватарки подготовлены в директории img.
const minCommentAvatar = 1;
const maxCommentAvatar = 6;

//5.3. message — Для формирования текста комментария вам необходимо взять одно или два случайных предложения.

const messages = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

//5.4. name — Имена авторов

const names = [
  'Глеб Калинин',
  'Тимур Латышев',
  'Ксения Попова',
  'Максим Иванов',
  'Елизавета Овчинникова',
  'Елисей Зайцев',
  'Тимур Котов',
  'Даниил Зверев',
  'Александр Смирнов',
  'Максим Золотарев',
  'Савелий Захаров',
  'Есения Полякова'
];

// Обьеденение всех элементов в обьект

function createPhotoDescription () {
  function createComments () {
    return {
      idСomments: commentPhotoId(),
      avatarСomments: `img/avatar-${getRandomInteger (minCommentAvatar, maxCommentAvatar)}.svg`,
      messageСomments: getRandomArrayElement (messages),
      nameСomments: getRandomArrayElement (names),
    };
  }
  const commentsArray = Array.from({length: 25}, createComments);

  return {
    id: publishedPhotoId(),
    url: `photos/${photoUrlId()}.jpg`,
    description: getRandomArrayElement (descriptions),
    likes: getRandomInteger (minLikes, maxLikes),
    comments: commentsArray
  };
}

Array.from({length: 2}, createPhotoDescription);
