const formButtonSubmit = document.querySelector('.img-upload__submit');
const SubmitButtonTexts = {
  IDLE: 'Опубликовать',
  SENDING: 'Публикую...'
};

const blockSubmitButton = () => {
  formButtonSubmit.disabled = true;
  formButtonSubmit.textContent = SubmitButtonTexts.SENDING;
};

const unblockSubmitButton = () => {
  formButtonSubmit.disabled = false;
  formButtonSubmit.textContent = SubmitButtonTexts.IDLE;
};

export {blockSubmitButton, unblockSubmitButton};
