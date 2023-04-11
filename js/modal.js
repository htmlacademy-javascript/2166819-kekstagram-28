import {generatedComment} from './comment.js';
import {isEscapeKey} from './util.js';
const SHOW_COMMENTS = 5;
const body = document.body;
const userModalBigPicture = document.querySelector('.big-picture');
const picturesContainer = document.querySelector('.pictures');
let onLoadComment = null;
let currentComments = 0;
//Кнопка закрытия модального окна
const cancel = document.querySelector('.big-picture__cancel');

//Добавление переменный для блока с комментариями к изображению
const socialComments = document.querySelector('.social__comments');
//const socialCommentsСount = document.querySelector('.social__comment-count');
const commentsLoaderButton = document.querySelector('.comments-loader');

//Переменная для удаления обработчика событий
const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeUserModal();
  }
};

const showСomments = (comments) => {
  const allComments = comments.slice();
  let renderedComments = [];
  return () => {
    if (allComments.length <= SHOW_COMMENTS || currentComments + SHOW_COMMENTS >= comments.length) {
      commentsLoaderButton.classList.add('hidden');
      generatedComment(allComments);
      currentComments += allComments.length;
    } else {
      commentsLoaderButton.classList.remove('hidden');
      renderedComments = allComments.splice(0, SHOW_COMMENTS);
      generatedComment(renderedComments);
      currentComments += SHOW_COMMENTS;
    }
    userModalBigPicture.querySelector('.social__comment-count').innerHTML = `${currentComments} из <span class="comments-count">${comments.length}</span> комментариев`;
  };
};

const showBigPicture = (data) => {
  userModalBigPicture.classList.remove('hidden');
  userModalBigPicture.querySelector('.big-picture__img img').src = data.url;
  userModalBigPicture.querySelector('.likes-count').textContent = data.likes;
  userModalBigPicture.querySelector('.social__caption').textContent = data.description;
  userModalBigPicture.querySelector('.comments-count').textContent = data.comments.length;

  //Удаление существующих комментариев из разметки
  socialComments.innerHTML = '';

  //Отмена прокрутки контейнера с фотографиями на заднем фоне
  body.classList.add('modal-open');

  //Закрытие модального окна на кнопку
  cancel.addEventListener('click', closeUserModal);

  //Закрытие окна на кнопку Escape
  document.addEventListener('keydown', onDocumentKeydown);

  onLoadComment = showСomments(data.comments);
  onLoadComment();
  commentsLoaderButton.addEventListener('click', onLoadComment);
};

//Обьявление декларативной функции closeUserModal, чтобы заработал removeEventListener
function closeUserModal () {
  userModalBigPicture.classList.add('hidden');
  document.removeEventListener('keydown', onDocumentKeydown);
  body.classList.remove('modal-open');
  currentComments = 0;
  commentsLoaderButton.removeEventListener('click', onLoadComment);
}

const openBigPicture = (picture) => {
  picturesContainer.addEventListener('click', (evt) => {
    const picturesWindow = evt.target.closest('[data-picture-id]');
    if (!picturesWindow) {
      return;
    }

    const picturesImg = picture.find(
      (item) => item.id === Number(picturesWindow.dataset.pictureId));

    showBigPicture(picturesImg);
  });
};

export {openBigPicture};
