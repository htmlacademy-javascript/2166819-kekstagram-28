
//Максимальное кол-во хештегов
const MAX_TAGS = 5;

//Регулярное выражение для хештегов
const HASHTAGS_SYMBOLS = /^#[a-zа-яё0-9]{1,19}$/i;

//Тексты ошибок
const ERROR_TEXT_MAX_TAGS = 'Максимальное количество хэш-тегов 5';
const ERROR_TEXT_NO_REPIT = 'Хэш-теги не должны повторяться';
const ERROR_TEXT_REG_EXP = 'Хэш-тег должен начинаться с #, содержать только буквы и цифры и иметь от 1 до 20 символов';

//Форма
const form = document.querySelector('.img-upload__form');

//Поле для хештегов
const textNewHashtags = document.querySelector('.text__hashtags');

const lineHashtags = (value) => value.toLowerCase().trim().split(' ');

const checkRegExpHashtag = (value) => {
  if (!value) {
    return true;
  }

  const hashtags = lineHashtags(value);
  return hashtags.every((tag) => HASHTAGS_SYMBOLS.test(tag));
};

const checkUniqueHashtags = (value) => {
  const hashtags = lineHashtags(value);
  const lineHashtagsSet = new Set(hashtags);

  return lineHashtagsSet.size === hashtags.length;
};

const checkMaxHashtagsCount = (value) => {
  const hashtags = lineHashtags(value);

  return hashtags.length <= MAX_TAGS;
};

const pristine = new Pristine(form, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
});

const validatetag = () => {
  pristine.addValidator(textNewHashtags, checkRegExpHashtag, ERROR_TEXT_REG_EXP);
  pristine.addValidator(textNewHashtags, checkUniqueHashtags, ERROR_TEXT_NO_REPIT);
  pristine.addValidator(textNewHashtags, checkMaxHashtagsCount, ERROR_TEXT_MAX_TAGS);
};


const formSubmit = (evt) => {
  if (!pristine.validate()) {
    evt.preventDefault();
  }
};

form.addEventListener('submit', formSubmit);

export {validatetag, pristine};
