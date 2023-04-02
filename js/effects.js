const SLIDER_MIN = 0;
const SLIDER_MAX = 100;
const SLIDER_STEP = 1;
/* const EFFECTS = [
  {class: 'effectspreview--none', style: ''},
  {class: 'effectspreview--chrome', style: 'grayscale', min: 0, max: 1, step: 0.1, dimention: ''},
  {class: 'effectspreview--sepia', style: 'sepia', min: 0, max: 1, step: 0.1, dimention: ''},
  {class: 'effectspreview--marvin', style: 'invert', min: 0, max: 100, step: 1, dimention: '%'},
  {class: 'effectspreview--phobos', style: 'blur', min: 0, max: 3, step: 0.1, dimention: 'px'},
  {class: 'effectspreview--heat', style: 'brightness', min: 1, max: 3, step: 0.1, dimention: ''}
]; */

//Загружаемое изображение
const uploadImageConteiner = document.querySelector('.img-upload__preview');
const uploadImage = uploadImageConteiner.querySelector('img');

//Для скрытия слайдера, когда изображение без фильтров
const effectLevel = document.querySelector('.img-upload__effect-level');

//Контейнер для слайдера
const effectLevelConteiner = document.querySelector('.effect-level__slider');

//Общий список эфектов
const effectsList = document.querySelector('.effects__list');

const onFilterClick = (evt) => {
  if (evt.target.matches('.effects__preview--none')) {
    effectLevel.classList.add('hidden');
    uploadImage.className = 'effects__preview--none';
  } else if (evt.target.matches('.effects__preview--chrome')) {
    effectLevel.classList.remove('hidden');
    uploadImage.className = 'effects__preview--chrome';
  } else if (evt.target.matches('.effects__preview--sepia')) {
    effectLevel.classList.remove('hidden');
    uploadImage.className = 'effects__preview--sepia';
  } else if (evt.target.matches('.effects__preview--marvin')) {
    effectLevel.classList.remove('hidden');
    uploadImage.className = 'effects__preview--marvin';
  } else if (evt.target.matches('.effects__preview--phobos')) {
    effectLevel.classList.remove('hidden');
    uploadImage.className = 'effects__preview--phobos';
  } else if (evt.target.matches('.effects__preview--heat')) {
    effectLevel.classList.remove('hidden');
    uploadImage.className = 'effects__preview--heat';
  }
};

const addsFilterOnImage = () => {
  noUiSlider.create(effectLevelConteiner, {
    range: {
      min: SLIDER_MIN,
      max: SLIDER_MAX,
    },
    start: SLIDER_MAX,
    step: SLIDER_STEP,
    connect: 'lower',
  });
  uploadImage.className = 'effects__preview--none';
  effectLevel.classList.add('hidden');
  effectsList.addEventListener('click', onFilterClick);
};

const removeFilterOnImage = () => {
  effectsList.removeEventListener('click', onFilterClick);
};

export {addsFilterOnImage, removeFilterOnImage};
