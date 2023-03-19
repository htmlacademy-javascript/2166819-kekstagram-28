import {generatedComment} from './comment.js';
const userModalBigPicture = document.querySelector('.big-picture');
const picturesContainer = document.querySelector('.pictures');
//Кнопка закрытия модального окна
const cancel = document.querySelector('.big-picture__cancel');

const show = (data) => {
  userModalBigPicture.classList.remove('hidden');
  userModalBigPicture.querySelector('.big-picture__img img').src = data.url;
  userModalBigPicture.querySelector('.likes-count').textContent = data.likes;
  userModalBigPicture.querySelector('.social__caption').textContent = data.description;
  userModalBigPicture.querySelector('.comments-count').textContent = data.comments.length;

  //Удаление существующих комментариев из разметки
  document.querySelector('.social__comments').innerHTML = '';

  //Добавление новых комментариев в ul
  generatedComment(data.comments);

  //Скрытие блока с кол-вом комментариев
  document.querySelector('.social__comment-count').classList.add('hidden');

  //Скрытие блока загрузки комментариев
  document.querySelector('.comments-loader').classList.add('hidden');

  //Отмена прокрутки контейнера с фотографиями на заднем фоне
  document.body.classList.add('modal-open');

  cancel.addEventListener('click', (evt) => {
    evt.preventDefault();
    userModalBigPicture.classList.add('hidden');
    document.body.classList.remove('modal-open');
  });

  document.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape') {
      userModalBigPicture.classList.add('hidden');
      document.body.classList.remove('modal-open');
    }
  });
};

const openBigPicture = (picture) => {
  picturesContainer.addEventListener('click', (evt) => {
    const picturesWindow = evt.target.closest('[data-picture-id]');
    if (!picturesWindow) {
      return;
    }

    const picturesImg = picture.find(
      (item) => item.id === +picturesWindow.dataset.pictureId
    );

    show(picturesImg);
  });
};

export {openBigPicture};


