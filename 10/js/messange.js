import {isEscapeKey} from './util.js';
const successMessange = document.querySelector('#success').content.querySelector('.success');
const errorMessange = document.querySelector('#error').content.querySelector('.error');
const body = document.body;

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeMessange();
  }
};

const showMessangeSuccess = () => {
  const successElement = successMessange.cloneNode(true);
  body.appendChild(successElement);
  document.addEventListener('keydown', onDocumentKeydown);
  const closeButton = successElement.querySelector('.success__button');
  closeButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    closeMessange();
  });
};

const showMessangeError = () => {
  const errorElement = errorMessange.cloneNode(true);
  body.appendChild(errorElement);
  document.addEventListener('keydown', onDocumentKeydown);
  const closeButton = errorElement.querySelector('.error__button');
  closeButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    closeMessange();
  });
};

function closeMessange () {
  const successMessangeShowed = document.querySelector('.success');
  const errorMessangeShowed = document.querySelector('.error');
  if (successMessangeShowed) {
    successMessangeShowed.remove();
  }
  if (errorMessangeShowed) {
    errorMessangeShowed.remove();
  }
  document.removeEventListener('keydown', onDocumentKeydown);
}

export {showMessangeSuccess, showMessangeError};
