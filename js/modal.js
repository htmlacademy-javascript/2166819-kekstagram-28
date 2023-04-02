import {generatedComment} from './comment.js';
import {isEscapeKey} from './util.js';
const body = document.body;
const userModalBigPicture = document.querySelector('.big-picture');
const picturesContainer = document.querySelector('.pictures');

//Кнопка закрытия модального окна
const cancel = document.querySelector('.big-picture__cancel');

//Добавление переменный для блока с комментариями к изображению
const socialComments = document.querySelector('.social__comments');
const socialCommentsСount = document.querySelector('.social__comment-count');
const commentsLoader = document.querySelector('.comments-loader');

//Переменная для удаления обработчика событий
const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeUserModal();
  }
};

const show = (data) => {
  userModalBigPicture.classList.remove('hidden');
  userModalBigPicture.querySelector('.big-picture__img img').src = data.url;
  userModalBigPicture.querySelector('.likes-count').textContent = data.likes;
  userModalBigPicture.querySelector('.social__caption').textContent = data.description;
  userModalBigPicture.querySelector('.comments-count').textContent = data.comments.length;

  //Удаление существующих комментариев из разметки
  socialComments.innerHTML = '';

  //Добавление новых комментариев в ul
  generatedComment(data.comments);

  //Скрытие блока с кол-вом комментариев
  socialCommentsСount.classList.add('hidden');

  //Скрытие блока загрузки комментариев
  commentsLoader.classList.add('hidden');

  //Отмена прокрутки контейнера с фотографиями на заднем фоне
  body.classList.add('modal-open');

  //Закрытие модального окна
  cancel.addEventListener('click', (evt) => {
    evt.preventDefault();
    userModalBigPicture.classList.add('hidden');
    body.classList.remove('modal-open');
  });

  //Закрытие окна на кнопку Escape
  document.addEventListener('keydown', onDocumentKeydown);
};

//Обьявление декларативной функции closeUserModal, чтобы заработал removeEventListener
function closeUserModal () {
  userModalBigPicture.classList.add('hidden');
  document.removeEventListener('keydown', onDocumentKeydown);
  body.classList.remove('modal-open');
}

const openBigPicture = (picture) => {
  picturesContainer.addEventListener('click', (evt) => {
    const picturesWindow = evt.target.closest('[data-picture-id]');
    if (!picturesWindow) {
      return;
    }

    const picturesImg = picture.find(
      (item) => item.id === Number(picturesWindow.dataset.pictureId)
    );

    show(picturesImg);
  });
};

export {openBigPicture};


