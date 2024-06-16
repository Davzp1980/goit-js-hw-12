import getFetch from './js/pixabay-api';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { imgListElem } from './js/render-functions';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import icon from './img/bi_x-octagon.png';
import { imagesTemplate } from './js/render-functions';
import simpleLightbox from 'simplelightbox';

const gallery = new simpleLightbox('.img-list a', {
  captionDelay: 500,
  captionPosition: 'bottom',
});

const iziToastOptions = {
  iconUrl: icon,
  backgroundColor: '#ef4040',
  position: 'topRight',
  message:
    'Sorry, there are no images matching your search query. Please, try again!',
};

const formElem = document.querySelector('.search-form');
const loadingElem = document.querySelector('.loader');

formElem.addEventListener('submit', e => {
  e.preventDefault();

  imgListElem.innerHTML = '';

  loadingElem.classList.remove('visually-hidden');

  const searchText = formElem.elements.searchText.value.trim();
  if (searchText === '') {
    loadingElem.classList.add('visually-hidden');
    return;
  }

  getFetch(searchText)
    .then(data => {
      if (data.hits.length === 0) {
        iziToast.show(iziToastOptions);
        loadingElem.classList.add('visually-hidden');
        return;
      }

      loadingElem.classList.add('visually-hidden');

      imagesTemplate(data.hits);

      gallery.refresh();
    })
    .catch(err => {
      throw new Error(err);
    });

  formElem.reset();
});
