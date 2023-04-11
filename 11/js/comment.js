const template = document.querySelector('#comments').content.querySelector('.social__comment');
const commentContainer = document.querySelector('.social__comments');

const generatedComment = (data) => {
  data.forEach(({avatar, message, name}) => {
  //Создание копии блока template comment
    const commentElement = template.cloneNode(true);
    //В сконированном элементе ищем поля для вставки атрибутов
    commentElement.querySelector('.social__picture').src = avatar;
    commentElement.querySelector('.social__picture').alt = name;
    commentElement.querySelector('.social__text').textContent = message;
    //Вставляем полученное изображение в конец блока
    commentContainer.appendChild(commentElement);
  });
};
export {generatedComment};
