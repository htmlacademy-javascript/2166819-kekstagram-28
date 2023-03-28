//Форма
const form = document.querySelector('.img-upload__form');

//Поле для хештегов
const textNewHashtags = document.querySelector('.text__hashtags');

//Максимальное кол-во хештегов
const MAX_TAGS = 5;

//Ошибка в написании тегов
const errorInHashtags = 'Некорректно написан Хэш-тег';

//Регулярное выражение для хештега
const hashtagsSymbol = /^#[a-zа-яё0-9]{1,19}$/i;

const hashtagsValide = (value) => {
  if (!value) {
    return true;
  }
  const lineHashtags = value.trim().split(' ');
  const lineHashtagsSet = new Set(lineHashtags);
  if (lineHashtagsSet.size === lineHashtags.length && lineHashtags.length <= MAX_TAGS) {
    return lineHashtags.every((tag) => hashtagsSymbol.test(tag));
  }
};

const pristine = new Pristine(form, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
});

const validatetag = () => {
  pristine.addValidator(textNewHashtags, hashtagsValide, errorInHashtags);
};

export {validatetag, pristine};
