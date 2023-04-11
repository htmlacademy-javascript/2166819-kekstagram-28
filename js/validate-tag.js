import {sendData} from './api.js';
import {showMessangeSuccess, showMessangeError} from './message.js';
import {blockSubmitButton, unblockSubmitButton} from './button-submit.js';

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

const getLineHashtags = (value) => value.toLowerCase().trim().split(' ');

const checkRegExpHashtag = (value) => {
  if (!value) {
    return true;
  }

  const hashtags = getLineHashtags(value);
  return hashtags.every((tag) => HASHTAGS_SYMBOLS.test(tag));
};

const checkUniqueHashtags = (value) => {
  const hashtags = getLineHashtags(value);
  const lineHashtagsSet = new Set(hashtags);

  return lineHashtagsSet.size === hashtags.length;
};

const checkMaxHashtagsCount = (value) => {
  const hashtags = getLineHashtags(value);

  return hashtags.length <= MAX_TAGS;
};

const pristine = new Pristine(form, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
});

pristine.addValidator(textNewHashtags, checkRegExpHashtag, ERROR_TEXT_REG_EXP);
pristine.addValidator(textNewHashtags, checkUniqueHashtags, ERROR_TEXT_NO_REPIT);
pristine.addValidator(textNewHashtags, checkMaxHashtagsCount, ERROR_TEXT_MAX_TAGS);


const setUserFormSubmit = (onSuccess) => {
  form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const isValid = pristine.validate();
    if (isValid) {
      blockSubmitButton();
      sendData(new FormData(evt.target))
        .then(()=> {
          showMessangeSuccess();
          onSuccess();
        })
        .catch(() => {
          showMessangeError();
        })
        .finally(unblockSubmitButton);
    }
  });
};

export {pristine, setUserFormSubmit};
