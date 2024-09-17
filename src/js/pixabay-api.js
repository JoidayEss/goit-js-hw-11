const API_KEY = '45185158-717bb7f7583789050cac5d72f';
const BASE_URL = 'https://pixabay.com/api/';

export function fetchImages(query) {
  const url = `${BASE_URL}?key=${API_KEY}&q=${encodeURIComponent(
    query
  )}&image_type=photo&orientation=horizontal&safesearch=true`;

  return fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error('Error fetching data');
      }
      return response.json();
    })
    .then(data => {
      return data.hits;
    })
    .catch(error => {
      console.error(error);
    });
}
