import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

export const MESSAGE =
  'Sorry, there are no images matching your search query. Please try again!';
export const LIMIT =
  "We're sorry, but you've reached the end of search results.";
export const CORRECT = 'Please enter correct information.';

export function onError(message) {
  iziToast.error({
    message: message,
    position: 'topRight',
  });
}
