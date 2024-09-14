import { fetchImages } from './js/pixabay-api.js';
import { renderImages } from './js/render-function.js';
import iziToast from 'izitoast';

const searchForm = document.getElementById('search-form');
const galleryElement = document.getElementById('gallery');

searchForm.addEventListener('submit', async e => {
  e.preventDefault();

  const query = document.getElementById('search-input').value.trim();

  if (!query) {
    iziToast.error({
      title: 'Error',
      message: 'Please enter a search term!',
    });
    return;
  }

  galleryElement.innerHTML = '';

  showLoader();

  const images = await fetchImages(query);

  hideLoader();

  if (images.length === 0) {
    iziToast.info({
      title: 'Info',
      message:
        'Sorry, there are no images matching your search query. Please try again!',
    });
  } else {
    renderImages(images, galleryElement);
  }
});

let loaderToast;

function showLoader() {
  loaderToast = iziToast.show({
    message: 'Loading images...',
    timeout: false,
    close: false,
    class: 'loader',
    position: 'topRight',
  });
}

function hideLoader() {
  if (loaderToast) {
    iziToast.hide({}, loaderToast);
  }
}
