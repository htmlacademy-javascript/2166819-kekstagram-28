import {isEscapeKey} from './util.js';
import {validatetag, pristine} from './validatetag.js';
import {scaleControlImageAdd, scaleControlImageRemove} from './scale.js';
import {addsFilterOnImage, removeFilterOnImage} from './effects.js';
const form = document.querySelector('.img-upload__form');
const uploadOverlay = document.querySelector('.img-upload__overlay');
const body = document.body;
const uploadFile = document.querySelector('#upload-file');
const closeOverlayButton = document.querySelector('#upload-cancel');
//Поле для хештегов
const textNewHashtags = document.querySelector('.text__hashtags');
//Поле для комментария
const textNewDescription = document.querySelector('.text__description');

//Переменная для удаления обработчика событий
const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeOverlay();
  }
};

const show = () => {
  //Удаление класса hidden
  uploadOverlay.classList.remove('hidden');

  //Отмена прокрутки контейнера с фотографиями на заднем фоне
  body.classList.add('modal-open');

  //Нельзя выйти из оверлея, когда поля для хештега и комментария находятся в фокусе
  textNewHashtags.addEventListener('focus', () => {
    document.removeEventListener('keydown', onDocumentKeydown);
  });

  textNewDescription.addEventListener('focus', () => {
    document.removeEventListener('keydown', onDocumentKeydown);
  });

  //Возвращает возможность выхода, когда поля не в фокусе
  textNewHashtags.addEventListener('blur', () => {
    document.addEventListener('keydown', onDocumentKeydown);
  });

  textNewDescription.addEventListener('blur', () => {
    document.addEventListener('keydown', onDocumentKeydown);
  });

  //Закрытие окна на кнопку Escape
  document.addEventListener('keydown', onDocumentKeydown);

  //Закрытие модального окна на кнопку
  closeOverlayButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    closeOverlay();
  });

  validatetag();
  scaleControlImageAdd();
  addsFilterOnImage();
};

//Обьявление декларативной функции closeOverlay, чтобы заработал removeEventListener
function closeOverlay () {
  form.reset();
  pristine.reset();
  uploadOverlay.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
  scaleControlImageRemove();
  removeFilterOnImage();
}

const openOverlay = () => {
  uploadFile.addEventListener('change', show);

};

export {openOverlay};
