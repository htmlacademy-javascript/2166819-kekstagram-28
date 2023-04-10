const template = document.querySelector('#picture').content.querySelector('.picture');
const picturesContainer = document.querySelector('.pictures');

//Вставка элементов через DocumentFragment
const similarListFragment = document.createDocumentFragment();

const generatedPicture = (data) => {
  picturesContainer.querySelectorAll('.picture').forEach((item) => item.remove());
  data.forEach(({likes, comments, url, id}) => {
  //Создание копии блока template picture
    const pictureElement = template.cloneNode(true);
    //В сконированном элементе ищем поля для вставки атрибутов
    //1. url
    pictureElement.querySelector('.picture__img').src = url;
    //2. comments
    pictureElement.querySelector('.picture__comments').textContent = comments.length;
    //3. likes
    pictureElement.querySelector('.picture__likes').textContent = likes;
    //Добавляется дата атрибут
    pictureElement.dataset.pictureId = id;
    //Вставляем полученное изображение в конец блока
    similarListFragment.appendChild(pictureElement);
  });

  picturesContainer.appendChild(similarListFragment);
};
export {generatedPicture};
