//Кнопки увеличения и уменьшения изображения
const buttonMinus = document.querySelector('.scale__control--smaller');
const buttonPlus = document.querySelector('.scale__control--bigger');

//Поле с размером изображения
const scaleValue = document.querySelector('.scale__control--value');

//Загружаемое изображение
const uploadImage = document.querySelector('.img-upload__preview  img');

//Шаг
const STEP = 25;

//Значение в поле
let value;

const MAX_VALUE = 100;
const MIN_VALUE = 25;


const onButtonPlus = () => {
  value = parseInt(scaleValue.value, 10);

  if (value < MAX_VALUE) {
    value += STEP;
    uploadImage.style.transform = `scale(${value / 100})`;
    scaleValue.value = `${value}%`;
  }
};

const onButtonMinus = () => {
  value = parseInt(scaleValue.value, 10);

  if (value > MIN_VALUE) {
    value -= STEP;
    uploadImage.style.transform = `scale(${value / 100})`;
    scaleValue.value = `${value}%`;
  }
};

const scaleControlImageAdd = () => {
  scaleValue.value = `${MAX_VALUE}%`;
  uploadImage.style.transform = 'scale(1)';
  buttonPlus.addEventListener('click', onButtonPlus);
  buttonMinus.addEventListener('click', onButtonMinus);
};

const scaleControlImageRemove = () => {
  buttonPlus.removeEventListener('click', onButtonPlus);
  buttonMinus.removeEventListener('click', onButtonMinus);
};

export {scaleControlImageAdd, scaleControlImageRemove};
