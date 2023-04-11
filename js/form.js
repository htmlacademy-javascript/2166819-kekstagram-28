import {isEscapeKey} from './util.js';
import {pristine} from './validate-tag.js';
import {addScaleControlImage, removeScaleControlImage} from './scale.js';
import {addsFilterOnImage, removeFilterOnImage} from './effects.js';
import {openUploadImage} from './upload-image.js';
const body = document.body;
const form = document.querySelector('.img-upload__form');
const uploadOverlay = document.querySelector('.img-upload__overlay');
const uploadFile = document.querySelector('#upload-file');
const closeOverlayButton = document.querySelector('#upload-cancel');
const textNewHashtags = document.querySelector('.text__hashtags');
const textNewDescription = document.querySelector('.text__description');

//Переменная для удаления обработчика событий
const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeOverlay();
  }
};

const showFormWindow = () => {
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

  addScaleControlImage();
  addsFilterOnImage();
};

//Обьявление декларативной функции closeOverlay, чтобы заработал removeEventListener
function closeOverlay () {
  form.reset();
  pristine.reset();
  uploadOverlay.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
  removeScaleControlImage();
  removeFilterOnImage();
}

const openOverlay = () => {
  uploadFile.addEventListener('change', showFormWindow);
  openUploadImage();
};

export {openOverlay, closeOverlay, onDocumentKeydown};
