import './filter.js';
import './validatetag.js';
import {setUserFormSubmit} from './validatetag.js';
import {openOverlay, closeOverlay} from './form.js';
import {getData} from './api.js';
import {generatedPicture} from './miniature.js';
import {openBigPicture} from './modal.js';
import {showAlert} from './util.js';


getData()
  .then((miniature) => {
    generatedPicture(miniature);
    openBigPicture(miniature);
  })
  .catch(() => showAlert('Ошибка при загрузке данных=( Попробуйте обновить страницу'));

openOverlay();

setUserFormSubmit(closeOverlay);
