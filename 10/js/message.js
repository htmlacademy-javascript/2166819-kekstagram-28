import {isEscapeKey} from './util.js';
import {onDocumentKeydown} from './form.js';

const successMessange = document.querySelector('#success').content.querySelector('.success');
const errorMessange = document.querySelector('#error').content.querySelector('.error');
const body = document.body;

const onMessangeKeydown = (evt) => {
  if (isEscapeKey(evt) ||
  evt.target.matches('.success__button') ||
  evt.target.matches('.success') ||
  evt.target.matches('.error__button') ||
  evt.target.matches('.error')) {
    closeMessange();
  }
};

const showMessangeSuccess = () => {
  const successElement = successMessange.cloneNode(true);
  body.appendChild(successElement);
  document.addEventListener('keydown', onMessangeKeydown);
  successElement.addEventListener('click', onMessangeKeydown);
};

const showMessangeError = () => {
  const errorElement = errorMessange.cloneNode(true);
  body.appendChild(errorElement);
  document.removeEventListener('keydown', onDocumentKeydown);
  document.addEventListener('keydown', onMessangeKeydown);
  errorElement.addEventListener('click', onMessangeKeydown);
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
  document.removeEventListener('keydown', onMessangeKeydown);
  document.addEventListener('keydown', onDocumentKeydown);
}

export {showMessangeSuccess, showMessangeError};
