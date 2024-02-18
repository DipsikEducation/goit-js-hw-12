
export function fetchImg(input) {
  const API_KEY = '42307906-965d9e91a86d7f624badfb082';
  const BASE_URL = 'https://pixabay.com/api/';
  const parameters = `q=${input}&image_type=photo&orientation=horizontal&safesearch=true`;
  const URL = `${BASE_URL}?key=${API_KEY}&${parameters}`;
  return fetch(URL).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}