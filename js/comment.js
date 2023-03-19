const template = document.querySelector('#comments').content.querySelector('.social__comment');
const commentContainer = document.querySelector('.social__comments');

const generatedComment = (data) => {
  data.forEach(({avatar, message, name}) => {
  //Создание кории блока template comment
    const commentElement = template.cloneNode(true);
    //В сконированном элементе ищем поля для вставки атрибутов
    //1. url
    commentElement.querySelector('.social__picture').src = avatar;
    //2. comments
    commentElement.querySelector('.social__picture').alt = name;
    //3. likes
    commentElement.querySelector('.social__text').textContent = message;
    //Вставляем полученное изображение в конец блока
    commentContainer.appendChild(commentElement);
  });
};
export {generatedComment};
