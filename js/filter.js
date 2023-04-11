const SORT_NUMBER = 0.5;
const PICTURE_COUNT = 10;
const Filter = {
  DEFAULT: 'filter-default',
  RANDOM: 'filter-random',
  DISCUSSED: 'filter-discussed'
};
const imageFilters = document.querySelector('.img-filters');
const imageFiltersForm = document.querySelector('.img-filters__form');
const filterButtons = imageFiltersForm.querySelectorAll('.img-filters__button');

let currentFilter = Filter.DEFAULT;
let pictures = [];

const sortRandomly = () => Math.random() - SORT_NUMBER;

const sortByDiscussedPictures = (picturesA, picturesB) => picturesB.comments.length - picturesA.comments.length;

const getFilteredPictures = () => {
  switch (currentFilter) {
    case Filter.RANDOM:
      return [...pictures].sort(sortRandomly).slice(0, PICTURE_COUNT);
    case Filter.DISCUSSED:
      return [...pictures].sort(sortByDiscussedPictures);
    default:
      return [...pictures];
  }
};

const setOnFilterClick = (cb) => {
  imageFiltersForm.addEventListener('click', (evt) => {
    filterButtons.forEach((item) => item.classList.remove('img-filters__button--active'));
    evt.target.classList.add('img-filters__button--active');
    currentFilter = evt.target.id;
    cb(getFilteredPictures());
  });
};


const init = (loadedPictures, cb) => {
  imageFilters.classList.remove('img-filters--inactive');
  pictures = [...loadedPictures];
  setOnFilterClick(cb);
};

export {init, getFilteredPictures};
