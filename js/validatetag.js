
//Максимальное кол-во хештегов
const MAX_TAGS = 5;

//Регулярное выражение для хештегов
const HASHTAGS_SYMBOLS = /^#[a-zа-яё0-9]{1,19}$/i;
const HASHTAGS_SYMBOL_START = /^#/;
const HASHTAGS_SYMBOL = /[a-zа-яё0-9]/;

//Тексты ошибок
const ERROR_TEXT_MAX_TAGS = 'Максимальное количество хэш-тегов 5';
const ERROR_TEXT_NO_REPIT = 'Хэш-теги не должны повторяться';
const ERROR_TEXT_SYMBOL_START = 'Хэш-тег должен начинаться с #';
const ERROR_TEXT_HASHTAGS_SYMBOL = 'Хэш-тег должен содержать только буквы и цифры';
const ERROR_TEXT_МАХ_ELEMENTS = 'Хэш-тег должен иметь от 1 до 20 символов';

//Форма
const form = document.querySelector('.img-upload__form');

//Поле для хештегов
const textNewHashtags = document.querySelector('.text__hashtags');

const hashtagsValide = (value) => {
  if (!value) {
    return true;
  }
  const lineHashtags = value.toLowerCase().trim().split(' ');
  const lineHashtagsSet = new Set(lineHashtags);
  if (lineHashtagsSet.size === lineHashtags.length && lineHashtags.length <= MAX_TAGS) {
    return lineHashtags.every((tag) => HASHTAGS_SYMBOLS.test(tag));
  }
};

const mistakes = (value) => {
  const lineHashtags = value.toLowerCase().trim().split(' ');
  const lineHashtagsSet = new Set(lineHashtags);

  if (lineHashtags.length > MAX_TAGS) {
    return ERROR_TEXT_MAX_TAGS;
  }

  if (lineHashtagsSet.size !== lineHashtags.length) {
    return ERROR_TEXT_NO_REPIT;
  }

  if (lineHashtagsSet.size === lineHashtags.length && lineHashtags.length <= MAX_TAGS) {
    for (let i = 0; i <= lineHashtags.length; i++) {
      if (!(HASHTAGS_SYMBOL_START.test(lineHashtags[i]))) {
        return ERROR_TEXT_SYMBOL_START;
      }

      if (!(HASHTAGS_SYMBOL.test(lineHashtags[i]))) {
        return ERROR_TEXT_HASHTAGS_SYMBOL;
      }

      if (!(lineHashtags.length[i] < 20 && lineHashtags.length[i] > 1)) {
        return ERROR_TEXT_МАХ_ELEMENTS;
      }
    }
  }
};

const pristine = new Pristine(form, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
});

const validatetag = () => {
  pristine.addValidator(textNewHashtags, hashtagsValide, mistakes);
};

export {validatetag, pristine};
