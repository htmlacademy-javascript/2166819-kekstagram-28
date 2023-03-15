import {createPhotoDescriptionArray} from './data.js';
const generatedPictureByNumber = createPhotoDescriptionArray();

const template = document.querySelector('#picture').content;
const picturesContainer = document.querySelector('.pictures');

//Вставка элементов через DocumentFragment
const similarListFragment = document.createDocumentFragment();

generatedPictureByNumber.forEach(({likes, comments, url}) => {
  //Создание кории блока template picture
  const pictureElement = template.cloneNode(true);
  //В сконированном элементе ищем поля для вставки атрибутов
  //1. url
  pictureElement.querySelector('.picture__img').src = url;
  //2. comments
  pictureElement.querySelector('.picture__comments').textContent = comments.length;
  //3. likes
  pictureElement.querySelector('.picture__likes').textContent = likes;
  //Вставляем полученное изображение в конец блока
  similarListFragment.appendChild(pictureElement);
});

picturesContainer.appendChild(similarListFragment);

export {generatedPictureByNumber};
