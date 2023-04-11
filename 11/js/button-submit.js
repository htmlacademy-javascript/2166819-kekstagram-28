const SubmitButtonTexts = {
  IDLE: 'Опубликовать',
  SENDING: 'Публикую...'
};
const formButtonSubmit = document.querySelector('.img-upload__submit');

const blockSubmitButton = () => {
  formButtonSubmit.disabled = true;
  formButtonSubmit.textContent = SubmitButtonTexts.SENDING;
};

const unblockSubmitButton = () => {
  formButtonSubmit.disabled = false;
  formButtonSubmit.textContent = SubmitButtonTexts.IDLE;
};

export {blockSubmitButton, unblockSubmitButton};
