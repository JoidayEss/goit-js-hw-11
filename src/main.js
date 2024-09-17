import { fetchImages } from './js/pixabay-api.js';
import { renderImages } from './js/render-function.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const searchForm = document.getElementById('search-form');
const galleryElement = document.getElementById('gallery');

searchForm.addEventListener('submit', function (e) {
  e.preventDefault();

  const query = document.getElementById('search-input').value.trim();

  function showLoader() {
    document.getElementById('loader').classList.remove('hidden');
  }

  function hideLoader() {
    document.getElementById('loader').classList.add('hidden');
  }

  if (!query) {
    iziToast.error({
      title: 'Error',
      message: 'Please enter a search term!',
    });
    return;
  }

  galleryElement.innerHTML = '';

  showLoader();

  fetchImages(query)
    .then(images => {
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
    })
    .catch(error => {
      hideLoader();
      iziToast.error({
        title: 'Error',
        message: 'Something went wrong. Please try again later.',
      });
      console.error('Error:', error);
    });
});

function showLoader() {}

function hideLoader() {}
