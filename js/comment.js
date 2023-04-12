const template = document.querySelector('#comments').content.querySelector('.social__comment');
const commentContainer = document.querySelector('.social__comments');

const generatedComment = (data) => {
  const commentFragment = document.createDocumentFragment();
  data.forEach(({avatar, message, name}) => {
  //Создание копии блока template comment
    const commentElement = template.cloneNode(true);
    const socialPicture = commentElement.querySelector('.social__picture');
    //В сконированном элементе ищем поля для вставки атрибутов
    socialPicture.src = avatar;
    socialPicture.alt = name;
    commentElement.querySelector('.social__text').textContent = message;
    //Вставляем полученное изображение в конец блока
    commentFragment.appendChild(commentElement);
  });
  commentContainer.appendChild(commentFragment);
};
export {generatedComment};
