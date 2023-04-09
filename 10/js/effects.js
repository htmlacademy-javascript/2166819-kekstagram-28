const SLIDER_MIN = 0;
const SLIDER_MAX = 100;
const SLIDER_STEP = 1;
const EFFECTS = {
  'effect-none': {
    class: 'effects__preview--none',
    style: ''},
  'effect-chrome': {
    class:'effects__preview--chrome',
    style: 'grayscale',
    min: 0,
    max: 1,
    step: 0.1,
    dimension: ''},
  'effect-sepia': {
    class: 'effects__preview--sepia',
    style: 'sepia',
    min: 0,
    max: 1,
    step: 0.1,
    dimension: ''},
  'effect-marvin': {
    class: 'effects__preview--marvin',
    style: 'invert',
    min: 0,
    max: 100,
    step: 1,
    dimension: '%'},
  'effect-phobos': {
    class: 'effects__preview--phobos',
    style: 'blur',
    min: 0,
    max: 3,
    step: 0.1,
    dimension: 'px'},
  'effect-heat': {
    class: 'effects__preview--heat',
    style: 'brightness',
    min: 1,
    max: 3,
    step: 0.1,
    dimension: ''}
};

//Загружаемое изображение
const uploadImageConteiner = document.querySelector('.img-upload__preview');
const uploadImage = uploadImageConteiner.querySelector('img');

//Для скрытия слайдера, когда изображение без фильтров
const effectLevel = document.querySelector('.img-upload__effect-level');

//Контейнер для слайдера
const effectLevelConteiner = document.querySelector('.effect-level__slider');

//Общий список эфектов
const effectsList = document.querySelector('.effects__list');

//Уровень эфекта
const effectLevelValue = document.querySelectorAll('.effect-level__value');

//Изменение фильтра от положения ползунка
const updateSlider = (currentEffect) => {
  effectLevelConteiner.noUiSlider.updateOptions({
    range: {
      min: currentEffect['min'],
      max: currentEffect['max'],
    },
    start: currentEffect['max'],
    step: currentEffect['step'],
  });
  effectLevelConteiner.noUiSlider.set(currentEffect['max']);
};

const onFilterChange = (evt) => {
  const currentEffectId = evt.target.id;
  const currentEffect = EFFECTS[currentEffectId];

  uploadImage.style.filter = currentEffect['style'];
  uploadImage.className = currentEffect['class'];
  uploadImage.id = currentEffectId;

  if (currentEffectId === 'effect-none') {
    effectLevel.classList.add('hidden');
  } else {
    effectLevel.classList.remove('hidden');
    uploadImage.style.filter = `${currentEffect.style}(${currentEffect.max}${currentEffect.dimension})`;
    updateSlider(currentEffect);
  }
};

const onSliderUpdate = () => {
  const currentEffectId = uploadImage.id;
  const currentEffect = EFFECTS[currentEffectId];
  const sliderValue = effectLevelConteiner.noUiSlider.get();
  effectLevelValue.value = sliderValue;
  uploadImage.style.filter = `${currentEffect.style}(${sliderValue}${currentEffect.dimension})`;
};

const addsFilterOnImage = () => {
  uploadImage.className = EFFECTS['effect-none']['class'];
  uploadImage.style.filter = EFFECTS['effect-none']['style'];
  uploadImage.id = 'effect-none';
  effectLevel.classList.add('hidden');
  effectsList.addEventListener('change', onFilterChange);
  noUiSlider.create(effectLevelConteiner, {
    range: {
      min: SLIDER_MIN,
      max: SLIDER_MAX,
    },
    start: SLIDER_MAX,
    step: SLIDER_STEP,
    connect: 'lower',
  });
  effectLevelConteiner.noUiSlider.on('update', onSliderUpdate);
};

const removeFilterOnImage = () => {
  effectLevelConteiner.noUiSlider.off('update', onSliderUpdate);
  effectLevelConteiner.noUiSlider.destroy();
  effectsList.removeEventListener('change', onFilterChange);
};

export {addsFilterOnImage, removeFilterOnImage};
