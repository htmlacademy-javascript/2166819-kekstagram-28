import {generatedPicture} from './miniature.js';
import {openBigPicture} from './modal.js';
import {showAlert} from './util.js';
const BASE_URL = 'https://28.javascript.pages.academy/kekstagram';
const Route = {
  GET_DATA: '/data',
  SEND_DATA: '/',
};

const Text = {
  GET_DATA: 'Ошибка при загрузке данных=( Попробуйте обновить страницу',
  SEND_DATA_ERROR: 'Ошибка при отправки формы=( Попробуйте ещё раз',
};

const getData = () => {
  fetch(`${BASE_URL}${Route.GET_DATA}`)
    .then((response) => response.json())
    .then((miniature) => {
      generatedPicture(miniature);
      openBigPicture(miniature);
    })
    .catch(() => {
      showAlert(Text.GET_DATA);
    });
};

const sendData = (body) => fetch(`${BASE_URL}${Route.SEND_DATA}`,
  {
    method: 'POST',
    body,
  })
  .then((response) => {
    if (!response.ok) {
      throw new Error();
    }
  })
  .catch(() => {
    throw new Error(Text.SEND_DATA_ERROR);
  });

export {getData, sendData};
