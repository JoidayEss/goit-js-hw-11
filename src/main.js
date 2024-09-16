import { fetchImages } from './js/pixabay-api.js';
import { renderImages } from './js/render-function.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

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
    iziToast.error({
      title: 'Info',
      message:
        'Sorry, there are no images matching your search query. Please try again!',
      position: 'topRight',
    });
  } else {
    renderImages(images, galleryElement);
  }
});

function showLoader() {}

function hideLoader() {}
