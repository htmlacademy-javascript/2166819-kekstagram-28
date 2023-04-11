import './validatetag.js';
import {effectsMini} from './effects-mini.js';
import {init, getFilteredPictures} from './filter.js';
import {setUserFormSubmit} from './validatetag.js';
import {openOverlay, closeOverlay} from './form.js';
import {getData} from './api.js';
import {generatedPicture} from './miniature.js';
import {openBigPicture} from './modal.js';
import {showAlert, debounce} from './util.js';
const RERENDER_TIME = 500;

try {
  const data = await getData();
  const debouncedRenderGallery = debounce(generatedPicture, RERENDER_TIME);
  init(data, debouncedRenderGallery);
  generatedPicture(getFilteredPictures());
  openBigPicture(getFilteredPictures());
} catch (err) {
  showAlert('Ошибка при загрузке данных=( Попробуйте обновить страницу');
}

openOverlay();

setUserFormSubmit(closeOverlay);
effectsMini();

